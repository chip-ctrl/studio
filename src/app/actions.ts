'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

const subscribeSchema = z.object({
  email: z.string().email(),
});

// Helper to add timeout to promises
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Request timeout')), ms)
  );
  return Promise.race([promise, timeout]);
}

export async function handleSubscribe(data: unknown): Promise<{ success?: string; error?: string }> {
  const parsed = subscribeSchema.safeParse(data);

  if (!parsed.success) {
    return { error: 'Please enter a valid email address.' };
  }

  // Check if Firebase is configured
  if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    console.error('Firebase not configured');
    return { error: 'Service temporarily unavailable. Please try again later.' };
  }

  try {
    await withTimeout(
      addDoc(collection(db, 'subscribers'), {
        email: parsed.data.email,
        subscribedAt: serverTimestamp(),
        status: 'active',
      }),
      10000 // 10 second timeout
    );

    return { success: 'Thank you for subscribing!' };
  } catch (error) {
    console.error('Error saving subscriber to Firestore:', error);
    return { error: 'Failed to subscribe. Please try again later.' };
  }
}

export async function handleInquiry(data: unknown): Promise<{ success?: string; error?: string }> {
  const parsed = inquirySchema.safeParse(data);

  if (!parsed.success) {
    console.error('Invalid inquiry data:', parsed.error.flatten().fieldErrors);
    return { error: 'Invalid data provided. Please check the form and try again.' };
  }

  // Check if Firebase is configured
  if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    console.error('Firebase not configured');
    return { error: 'Service temporarily unavailable. Please try again later.' };
  }

  try {
    // Save to Firestore with timeout
    await withTimeout(
      addDoc(collection(db, 'inquiries'), {
        ...parsed.data,
        createdAt: serverTimestamp(),
        status: 'new',
      }),
      10000 // 10 second timeout
    );

    console.log('Inquiry saved to Firestore:', parsed.data);

    return { success: 'Thank you for your message. We will be in touch shortly!' };
  } catch (error) {
    console.error('Error saving inquiry to Firestore:', error);
    return { error: 'Failed to submit your message. Please try again later.' };
  }
}

'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

const subscribeSchema = z.object({
  email: z.string().email(),
});

export async function handleSubscribe(data: unknown): Promise<{ success?: string; error?: string }> {
  const parsed = subscribeSchema.safeParse(data);

  if (!parsed.success) {
    return { error: 'Please enter a valid email address.' };
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    console.error('Resend not configured');
    return { error: 'Service temporarily unavailable. Please try again later.' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Add contact to Resend Audience for newsletter broadcasts
    const result = await resend.contacts.create({
      email: parsed.data.email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    if (result.error) {
      // Check if already subscribed
      if (result.error.message?.includes('already exists')) {
        return { success: 'You are already subscribed!' };
      }
      console.error('Resend error:', result.error);
      return { error: 'Failed to subscribe. Please try again later.' };
    }

    return { success: 'Thank you for subscribing!' };
  } catch (error) {
    console.error('Subscribe error:', error);
    return { error: 'Failed to subscribe. Please try again later.' };
  }
}

export async function handleInquiry(data: unknown): Promise<{ success?: string; error?: string }> {
  const parsed = inquirySchema.safeParse(data);

  if (!parsed.success) {
    console.error('Invalid inquiry data:', parsed.error.flatten().fieldErrors);
    return { error: 'Invalid data provided. Please check the form and try again.' };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    // Send email notification using Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Use CONTACT_EMAIL env var, fallback to verified email for Resend free tier
      const contactEmail = process.env.CONTACT_EMAIL || 'chip@oldfourthcapital.com';

      const emailResult = await resend.emails.send({
        from: 'RTG Website <onboarding@resend.dev>',
        to: contactEmail,
        replyTo: email,
        subject: `New Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">This message was sent from the RTG Resto Tech Group website contact form.</p>
        `,
      });

      if (emailResult.error) {
        console.error('Resend error:', emailResult.error);
        return { error: 'Failed to send your message. Please try again later.' };
      }
    }

    return { success: 'Thank you for your message. We will be in touch shortly!' };
  } catch (error) {
    console.error('Error handling inquiry:', error);
    return { error: 'Failed to submit your message. Please try again later.' };
  }
}

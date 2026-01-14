'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Loader2, CheckCircle } from 'lucide-react';
import { useState, useTransition } from 'react';
import { handleSubscribe } from '@/app/actions';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    startTransition(async () => {
      const result = await handleSubscribe({ email });
      if (result.success) {
        setMessage({ type: 'success', text: result.success });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: result.error || 'Something went wrong' });
      }
    });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8 sm:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 font-headline font-bold text-lg sm:text-xl">
              RTG Resto Tech Group
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground">Investing in Great Businesses. Elevating Them with Technology and Experience.</p>
          </div>
          <div className="grid grid-cols-3 md:col-span-2 gap-4 sm:gap-8 text-xs sm:text-sm">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2 sm:mb-3">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/team" className="text-muted-foreground hover:text-primary">Our Team</Link></li>
                <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2 sm:mb-3">Opportunities</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Sell</Link></li>
                <li><Link href="/#franchise" className="text-muted-foreground hover:text-primary">Franchise</Link></li>
                <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Partner</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2 sm:mb-3">Legal</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="font-semibold text-center text-sm sm:text-base">Stay Connected</h4>
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">Get the latest news and insights from RTG.</p>
            <form onSubmit={onSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isPending}
                required
              />
              <Button type="submit" variant="default" className="text-sm px-3 sm:px-4" disabled={isPending}>
                {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
              </Button>
            </form>
            {message && (
              <p className={`text-xs flex items-center gap-1 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {message.type === 'success' && <CheckCircle className="h-3 w-3" />}
                {message.text}
              </p>
            )}
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <Link href="https://www.linkedin.com/company/resto-tech-group-lp/" aria-label="LinkedIn"><Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 border-t pt-4 sm:pt-6 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Resto Tech Group LP. All rights reserved.</p>
          <p className="mt-1 text-xs">Resto Tech Group LP is a Delaware Limited Partnership.</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Montserrat, Lora } from 'next/font/google';

export const metadata: Metadata = {
  title: 'RTG Resto Tech Group',
  description: 'A Delaware Company',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable} scroll-smooth`}>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

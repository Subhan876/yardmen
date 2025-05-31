import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// Font configuration with optimized loading strategy
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

const lora = Lora({ 
  subsets: ['latin'], 
  variable: '--font-lora',
  display: 'swap',
  preload: true,
  fallback: ['georgia', 'serif']
});

export const metadata: Metadata = {
  title: 'Yard Men | Professional Landscaping Services',
  description: 'Transform your outdoor space with Yard Men, your trusted residential landscaping experts. We offer fences, decks, concrete, pavers, sod installation and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-ivory text-forest-green">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
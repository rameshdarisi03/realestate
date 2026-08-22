import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { CurrencyProvider } from '@/context/CurrencyContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BRP Properties | Luxury Real Estate & Architectural Residences',
  description: 'Curating quiet luxury and architectural brilliance for the discerning few. Discover an exclusive portfolio of curated luxury residences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-white text-[#1b1c1c] dark:bg-[#121212] dark:text-[#eff1f5] selection:bg-[#c5a059] selection:text-black min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <CurrencyProvider>
            {children}
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

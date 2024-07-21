import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import { coreConfig } from '@/config';

const inter = Inter({ subsets: ['latin'] });

// this is a reserved word in Next.js, defines head metadata
export const metadata: Metadata = {
  ...coreConfig.metadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Typewriter } from '../components/typed';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'localhost:r0807/',
  description: 'portfolio site_',
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/png',
    },
    shortcut: { url: '/favicon.ico', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

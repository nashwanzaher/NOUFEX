import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { QueryProvider } from '@/providers/query-provider';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NoufEx',
    template: '%s · NoufEx',
  },
  description: 'NoufEx — your omni-channel commerce experience.',
  applicationName: 'NoufEx',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'NoufEx',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

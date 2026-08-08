import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';

import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'OrudeiArtwork',
    template: '%s — OrudeiArtwork',
  },

  description:
    'Dibujo y obras realizadas mediante stippling con tiralíneas en Santiago, Chile.',

  applicationName: 'OrudeiArtwork',

  keywords: [
    'OrudeiArtwork',
    'arte chileno',
    'dibujo',
    'stippling',
    'puntillismo',
    'tiralíneas',
    'obras originales',
    'artista en Santiago',
  ],

  authors: [
    {
      name: 'OrudeiArtwork',
    },
  ],

  creator: 'OrudeiArtwork',
  publisher: 'OrudeiArtwork',

  icons: {
    icon: [
      {
        url: '/brand/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/brand/icon.svg',
  },

  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'OrudeiArtwork',
    title: 'OrudeiArtwork',
    description:
      'Dibujo y obras realizadas mediante stippling con tiralíneas.',
    images: [
      {
        url: '/brand/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'OrudeiArtwork',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'OrudeiArtwork',
    description:
      'Dibujo y obras realizadas mediante stippling con tiralíneas.',
    images: ['/brand/opengraph-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  category: 'art',
};

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
  colorScheme: 'dark',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang='es'>
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

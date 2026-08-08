import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Geist } from 'next/font/google';
import { getLocale } from 'next-intl/server';

import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500'],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEnglish = locale === 'en';

  const description = isEnglish
    ? 'OrudeiArtwork gallery.'
    : 'Galería de OrudeiArtwork.';

  return {
    metadataBase: new URL(siteUrl),

    title: {
      default: 'OrudeiArtwork',
      template: '%s — OrudeiArtwork',
    },

    description,

    applicationName: 'OrudeiArtwork',

    keywords: [
      'OrudeiArtwork',
      'arte chileno',
      'Chilean art',
      'dibujo',
      'drawing',
      'stippling',
      'puntillismo',
      'tiralíneas',
      'obras originales',
      'original artwork',
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
      locale: isEnglish ? 'en_US' : 'es_CL',
      siteName: 'OrudeiArtwork',
      title: 'OrudeiArtwork',
      description,
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
      description,
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
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
  colorScheme: 'dark',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geist.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

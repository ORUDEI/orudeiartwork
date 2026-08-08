import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ArtworkItem } from '@/components/artwork/artwork-item';
import { artworks } from '@/data/artworks';

interface GalleryPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === 'en';

  return {
    title: isEnglish ? 'Gallery' : 'Galería',
    description: isEnglish
      ? 'Visual archive of original works by OrudeiArtwork.'
      : 'Archivo visual de obras originales de OrudeiArtwork.',
    alternates: {
      canonical: isEnglish ? '/en/galeria' : '/galeria',
      languages: {
        es: '/galeria',
        en: '/en/galeria',
      },
    },
  };
}

export default async function GalleryPage({
  params,
}: GalleryPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'Gallery',
  });

  return (
    <section>
      <header className='mb-16 flex items-end justify-between gap-8 sm:mb-20'>
        <div>
          <p className='mb-3 text-[10px] uppercase tracking-[0.2em] text-white/40'>
            {t('eyebrow')}
          </p>

          <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
            {t('title')}
          </h1>
        </div>

        <p className='text-xs uppercase tracking-[0.18em] text-white/40'>
          2026
        </p>
      </header>

      <div className='grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 xl:grid-cols-3'>
        {artworks.map((artwork, index) => (
          <ArtworkItem
            key={artwork.slug}
            artwork={artwork}
            variant='gallery'
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

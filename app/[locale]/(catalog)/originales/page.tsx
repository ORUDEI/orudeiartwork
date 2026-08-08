import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import {
  ArtworkFilters,
  type ArtworkFilter,
} from '@/components/artwork/artwork-filters';
import { ArtworkItem } from '@/components/artwork/artwork-item';
import { artworks } from '@/data/artworks';

interface OriginalsPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<{
    estado?: string;
  }>;
}

function getActiveFilter(value?: string): ArtworkFilter {
  if (value === 'available' || value === 'sold') {
    return value;
  }

  return 'all';
}

export async function generateMetadata({
  params,
}: OriginalsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === 'en';

  return {
    title: isEnglish ? 'Originals' : 'Originales',
    description: isEnglish
      ? 'Original works by OrudeiArtwork, including their price and availability.'
      : 'Obras originales de OrudeiArtwork, con sus valores y disponibilidad.',
    alternates: {
      canonical: isEnglish ? '/en/originales' : '/originales',
      languages: {
        es: '/originales',
        en: '/en/originales',
      },
    },
  };
}

export default async function OriginalsPage({
  params,
  searchParams,
}: OriginalsPageProps) {
  const { locale } = await params;
  const query = await searchParams;

  const t = await getTranslations({
    locale,
    namespace: 'Originals',
  });

  const activeFilter = getActiveFilter(query.estado);

  const originals = artworks.filter((artwork) => {
    if (!artwork.isOriginal) {
      return false;
    }

    if (activeFilter === 'available') {
      return artwork.status === 'available';
    }

    if (activeFilter === 'sold') {
      return artwork.status === 'sold';
    }

    return true;
  });

  return (
    <section>
      <header className='mb-16 sm:mb-20'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='mb-3 text-[10px] uppercase tracking-[0.2em] text-white/40'>
              {t('eyebrow')}
            </p>

            <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
              {t('title')}
            </h1>
          </div>

          <ArtworkFilters activeFilter={activeFilter} />
        </div>
      </header>

      {originals.length > 0 ? (
        <div className='grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-3'>
          {originals.map((artwork, index) => (
            <ArtworkItem
              key={artwork.slug}
              artwork={artwork}
              variant='original'
              priority={index === 0}
            />
          ))}
        </div>
      ) : (
        <div className='flex min-h-[50vh] items-center justify-center'>
          <p className='text-center text-xs uppercase tracking-[0.18em] text-white/40'>
            {t('empty')}
          </p>
        </div>
      )}
    </section>
  );
}

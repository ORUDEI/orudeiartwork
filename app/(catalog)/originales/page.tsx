import type { Metadata } from 'next';

import {
  ArtworkFilters,
  type ArtworkFilter,
} from '@/components/artwork/artwork-filters';
import { ArtworkItem } from '@/components/artwork/artwork-item';
import { artworks } from '../../data/artworks';

export const metadata: Metadata = {
  title: 'Originales',
  description:
    'Consulta las obras originales de OrudeiArtwork, sus valores y disponibilidad.',
  alternates: {
    canonical: '/originales',
  },
};
interface OriginalsPageProps {
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

export default async function OriginalsPage({
  searchParams,
}: OriginalsPageProps) {
  const params = await searchParams;
  const activeFilter = getActiveFilter(params.estado);

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
      <header className='mb-12 space-y-8'>
        <div>
          <p className='mb-3 text-[10px] uppercase tracking-[0.24em] text-white/40'>
            Obras únicas
          </p>

          <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
            Originales
          </h1>
        </div>

        <ArtworkFilters activeFilter={activeFilter} />
      </header>

      {originals.length > 0 ? (
        <div className='grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-3'>
          {artworks.map((artwork, index) => (
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
            No hay obras en esta categoría.
          </p>
        </div>
      )}
    </section>
  );
}

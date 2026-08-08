import type { Metadata } from 'next';

import { ArtworkItem } from '@/components/artwork/artwork-item';
import { artworks } from '../../data/artworks';

export const metadata: Metadata = {
  title: 'Galería',
  description:
    'Archivo visual de obras de OrudeiArtwork realizadas mediante stippling con tiralíneas.',
  alternates: {
    canonical: '/galeria',
  },
};
export default function GalleryPage() {
  return (
    <section>
      <header className='mb-12 flex items-end justify-between gap-6'>
        <div>
          <p className='mb-3 text-[10px] uppercase tracking-[0.24em] text-white/40'>
            Archivo
          </p>

          <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
            Galería
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

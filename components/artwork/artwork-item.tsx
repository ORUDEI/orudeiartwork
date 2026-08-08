import Image from 'next/image';

import { artworkStatusLabels, formatArtworkPrice } from '@/lib/artwork';
import { cn } from '@/lib/utils';
import type { Artwork } from '../../app/types/artwork';

interface ArtworkItemProps {
  artwork: Artwork;
  variant?: 'gallery' | 'original';
  priority?: boolean;
}

function getInstagramUrl(): string | null {
  const username = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME;

  if (!username) {
    return null;
  }

  return `https://www.instagram.com/${username}/`;
}

export function ArtworkItem({
  artwork,
  variant = 'gallery',
  priority = false,
}: ArtworkItemProps) {
  const isOriginal = variant === 'original';
  const isAvailable = artwork.status === 'available';
  const hasPrice = isAvailable && typeof artwork.price === 'number';

  const instagramUrl =
    isOriginal && isAvailable ? getInstagramUrl() : null;

  return (
    <article>
      <div className='group relative aspect-[148/210] overflow-hidden'>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes='
            (max-width: 639px) calc(100vw - 48px),
            (max-width: 1279px) 50vw,
            33vw
          '
          className={cn(
            'object-contain',
            isOriginal && [
              'transition-opacity duration-500',
              'ease-[cubic-bezier(0.22,1,0.36,1)]',
              'group-hover:opacity-35',
              'group-focus-within:opacity-35',
            ],
          )}
        />

        {isOriginal && (
          <div
            className={cn(
              'absolute inset-0 z-10 hidden',
              'flex-col justify-between p-6 text-white',
              'opacity-0 transition-opacity duration-500',
              'ease-[cubic-bezier(0.22,1,0.36,1)]',
              'group-hover:opacity-100',
              'group-focus-within:opacity-100',
              'sm:flex',
            )}
          >
            <div>
              <p className='text-[10px] uppercase tracking-[0.2em] text-white/60'>
                {artwork.year}
              </p>

              <h2 className='mt-3 text-xl font-medium uppercase tracking-[0.08em]'>
                {artwork.title}
              </h2>
            </div>

            <div>
              <dl className='space-y-2 text-xs leading-5 text-white/75'>
                <div>
                  <dt className='sr-only'>Técnica</dt>
                  <dd>{artwork.technique}</dd>
                </div>

                <div>
                  <dt className='sr-only'>Dimensiones</dt>
                  <dd>{artwork.dimensions}</dd>
                </div>
              </dl>

              <div className='mt-6 border-t border-white/20 pt-5'>
                <div className='flex items-end justify-between gap-5'>
                  <p className='text-[10px] uppercase tracking-[0.18em] text-white/65'>
                    {artworkStatusLabels[artwork.status]}
                  </p>

                  {hasPrice && (
                    <p className='text-sm font-medium tracking-[0.08em]'>
                      {formatArtworkPrice(artwork.price)}
                    </p>
                  )}
                </div>

                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target='_blank'
                    rel='noreferrer'
                    className={cn(
                      'group/link mt-4 inline-flex w-fit items-center',
                      'text-[10px] font-medium uppercase tracking-[0.22em]',
                      'text-white transition-colors duration-300',
                      'hover:text-white/70',
                      'focus-visible:outline-none',
                    )}
                  >
                    <span className='relative pb-2'>
                      Consultar por Instagram

                      <span
                        aria-hidden='true'
                        className={cn(
                          'absolute bottom-0 left-0 h-px w-full',
                          'origin-left scale-x-0 bg-current',
                          'transition-transform duration-300',
                          'group-hover/link:scale-x-100',
                          'group-focus-visible/link:scale-x-100',
                        )}
                      />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {!isOriginal && (
        <div className='mt-4 border-t border-white/10 pt-4'>
          <div className='flex items-baseline justify-between gap-5'>
            <h2 className='text-[11px] font-medium uppercase tracking-[0.18em]'>
              {artwork.title}
            </h2>

            <p className='shrink-0 text-[10px] tracking-[0.16em] text-white/45'>
              {artwork.year}
            </p>
          </div>

          <p className='mt-2 text-xs leading-5 text-white/45'>
            {artwork.technique}
          </p>

          <p className='text-xs leading-5 text-white/35'>
            {artwork.dimensions}
          </p>
        </div>
      )}

      {isOriginal && (
        <div className='mt-4 sm:hidden'>
          <div className='flex items-baseline justify-between gap-5'>
            <h2 className='text-[11px] font-medium uppercase tracking-[0.18em]'>
              {artwork.title}
            </h2>

            <p className='shrink-0 text-[10px] tracking-[0.16em] text-white/45'>
              {artwork.year}
            </p>
          </div>

          <p className='mt-2 text-xs leading-5 text-white/50'>
            {artwork.technique}
          </p>

          <p className='text-xs leading-5 text-white/50'>
            {artwork.dimensions}
          </p>

          <div className='mt-4 border-t border-white/10 pt-4'>
            <div className='flex items-baseline justify-between gap-5'>
              <p className='text-[10px] uppercase tracking-[0.16em] text-white/45'>
                {artworkStatusLabels[artwork.status]}
              </p>

              {hasPrice && (
                <p className='text-[11px] font-medium tracking-[0.1em]'>
                  {formatArtworkPrice(artwork.price)}
                </p>
              )}
            </div>

            {instagramUrl && (
              <a
                href={instagramUrl}
                target='_blank'
                rel='noreferrer'
                className='group/link mt-4 inline-flex w-fit text-[10px] font-medium uppercase tracking-[0.22em]'
              >
                <span className='relative pb-2'>
                  Consultar por Instagram

                  <span
                    aria-hidden='true'
                    className='absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/link:scale-x-100'
                  />
                </span>
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

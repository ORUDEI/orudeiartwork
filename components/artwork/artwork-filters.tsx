'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export type ArtworkFilter = 'all' | 'available' | 'sold';

interface ArtworkFiltersProps {
  activeFilter: ArtworkFilter;
}

const filters: Array<{
  key: 'all' | 'available' | 'sold';
  value: ArtworkFilter;
  href: string;
}> = [
  {
    key: 'all',
    value: 'all',
    href: '/originales',
  },
  {
    key: 'available',
    value: 'available',
    href: '/originales?estado=available',
  },
  {
    key: 'sold',
    value: 'sold',
    href: '/originales?estado=sold',
  },
];

export function ArtworkFilters({
  activeFilter,
}: ArtworkFiltersProps) {
  const t = useTranslations('ArtworkFilters');

  return (
    <nav
      aria-label={t('ariaLabel')}
      className='flex items-center gap-5'
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <Link
            key={filter.value}
            href={filter.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'relative pb-2 text-[10px] font-medium uppercase',
              'tracking-[0.2em] transition-colors',
              'after:absolute after:bottom-0 after:left-0 after:h-px',
              'after:bg-current after:transition-[width]',
              isActive
                ? 'text-white after:w-full'
                : 'text-white/40 after:w-0 hover:text-white hover:after:w-full',
            )}
          >
            {t(filter.key)}
          </Link>
        );
      })}
    </nav>
  );
}

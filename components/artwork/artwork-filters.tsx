import Link from 'next/link';

import { cn } from '@/lib/utils';

export type ArtworkFilter = 'all' | 'available' | 'sold';

interface ArtworkFiltersProps {
  activeFilter: ArtworkFilter;
}

const filters: Array<{
  label: string;
  value: ArtworkFilter;
  href: string;
}> = [
  {
    label: 'Todas',
    value: 'all',
    href: '/originales',
  },
  {
    label: 'Disponibles',
    value: 'available',
    href: '/originales?estado=available',
  },
  {
    label: 'Vendidas',
    value: 'sold',
    href: '/originales?estado=sold',
  },
];

export function ArtworkFilters({
  activeFilter,
}: ArtworkFiltersProps) {
  return (
    <nav
      aria-label='Filtrar obras originales'
      className='flex flex-wrap gap-x-7 gap-y-3'
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
            {filter.label}
          </Link>
        );
      })}
    </nav>
  );
}

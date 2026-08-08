'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const navigation = [
  {
    label: 'Galería',
    href: '/galeria',
  },
  {
    label: 'Originales',
    href: '/originales',
  },
  {
    label: 'Sobre mí',
    href: '/sobre-mi',
  },
  {
    label: 'Envíos',
    href: '/envios',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
];

export function SiteSidebar() {
  const pathname = usePathname();

  return (
    <aside className='fixed inset-y-0 right-0 hidden w-[360px] border-l border-white/10 bg-[#101010] px-12 py-16 lg:block'>
      <div className='flex h-full min-h-[420px] flex-col'>
        <Link
          href='/'
          className='w-fit text-base font-medium uppercase tracking-[0.16em]'
        >
          OrudeiArtwork
        </Link>

        <nav
          aria-label='Navegación principal'
          className='mt-16 flex flex-col items-start gap-8'
        >
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative w-fit text-sm font-medium uppercase',
                  'tracking-[0.2em] transition-colors duration-300',
                  'after:absolute after:-bottom-2 after:left-0 after:h-px',
                  'after:bg-current after:transition-[width] after:duration-300',
                  isActive
                    ? 'text-white after:w-full'
                    : 'text-white/60 after:w-0 hover:text-white hover:after:w-full',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <p className='mt-auto pt-20 text-[10px] uppercase tracking-[0.18em] text-white/35'>
          Santiago, Chile
        </p>
      </div>
    </aside>
  );
}

'use client';

import { useTranslations } from 'next-intl';

import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  {
    key: 'gallery',
    href: '/galeria',
  },
  {
    key: 'originals',
    href: '/originales',
  },
  {
    key: 'about',
    href: '/sobre-mi',
  },
  {
    key: 'shipping',
    href: '/envios',
  },
  {
    key: 'contact',
    href: '/contacto',
  },
] as const;

export function SiteSidebar() {
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  return (
    <aside className='fixed right-0 top-0 hidden h-screen w-[360px] border-l border-white/10 bg-[#101010] px-12 py-16 lg:flex'>
      <div className='flex w-full flex-col'>
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
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className='mt-auto flex w-full items-center justify-between gap-6 pt-20'>
          <p className='text-[10px] uppercase tracking-[0.18em] text-white/35'>
            Santiago, Chile
          </p>

          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  );
}

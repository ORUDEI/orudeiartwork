'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      aria-label='Cambiar idioma'
      className='flex shrink-0 items-center gap-2'
    >
      <Link
        href={pathname}
        locale='es'
        className={cn(
          'text-[10px] font-medium uppercase tracking-[0.18em]',
          'transition-colors duration-300',
          locale === 'es'
            ? 'text-white'
            : 'text-white/30 hover:text-white',
        )}
      >
        ES
      </Link>

      <span
        aria-hidden='true'
        className='text-[10px] text-white/20'
      >
        /
      </span>

      <Link
        href={pathname}
        locale='en'
        className={cn(
          'text-[10px] font-medium uppercase tracking-[0.18em]',
          'transition-colors duration-300',
          locale === 'en'
            ? 'text-white'
            : 'text-white/30 hover:text-white',
        )}
      >
        EN
      </Link>
    </div>
  );
}

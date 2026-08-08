'use client';

import * as React from 'react';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = React.useTransition();

  const changeLocale = (nextLocale: 'es' | 'en') => {
    if (locale === nextLocale) {
      return;
    }

    const query = searchParams.toString();
    const href = query ? `${pathname}?${query}` : pathname;

    startTransition(() => {
      router.replace(href, {
        locale: nextLocale,
      });
    });
  };

  return (
    <div
      aria-label='Cambiar idioma'
      className={cn(
        'flex shrink-0 items-center gap-2',
        isPending && 'pointer-events-none opacity-60',
      )}
    >
      <button
        type='button'
        onClick={() => changeLocale('es')}
        disabled={isPending || locale === 'es'}
        aria-pressed={locale === 'es'}
        className={cn(
          'cursor-pointer bg-transparent p-0',
          'text-[10px] font-medium uppercase tracking-[0.18em]',
          'transition-colors duration-300',
          locale === 'es'
            ? 'cursor-default text-white'
            : 'text-white/30 hover:text-white',
        )}
      >
        ES
      </button>

      <span
        aria-hidden='true'
        className='text-[10px] text-white/20'
      >
        /
      </span>

      <button
        type='button'
        onClick={() => changeLocale('en')}
        disabled={isPending || locale === 'en'}
        aria-pressed={locale === 'en'}
        className={cn(
          'cursor-pointer bg-transparent p-0',
          'text-[10px] font-medium uppercase tracking-[0.18em]',
          'transition-colors duration-300',
          locale === 'en'
            ? 'cursor-default text-white'
            : 'text-white/30 hover:text-white',
        )}
      >
        EN
      </button>
    </div>
  );
}

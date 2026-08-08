'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
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

export function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#101010]/95 px-6 text-white backdrop-blur-sm lg:hidden'>
      <Link
        href='/'
        className='text-sm font-medium uppercase tracking-[0.16em]'
      >
        OrudeiArtwork
      </Link>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          render={
            <Button
              type='button'
              variant='ghost'
              size='sm'
              aria-label='Abrir menú de navegación'
              className={cn(
                'h-auto cursor-pointer touch-manipulation p-0',
                'border-0 bg-transparent shadow-none',
                'text-[10px] font-medium uppercase tracking-[0.22em]',
                'text-white/70 hover:bg-transparent hover:text-white',
                'focus-visible:bg-transparent focus-visible:ring-0',
                'focus-visible:ring-offset-0',
              )}
            />
          }
        >
          Menú
        </SheetTrigger>

        <SheetContent
          side='right'
          showCloseButton={false}
          className={cn(
            'w-full max-w-none border-l-0',
            'bg-[#101010] p-0 text-white shadow-none',
            'sm:max-w-full',
          )}
        >
          <div className='flex min-h-dvh flex-col px-6 py-7'>
            <SheetHeader className='flex-row items-center justify-between gap-6 p-0 text-left'>
              <SheetTitle className='text-sm font-medium uppercase tracking-[0.16em] text-white'>
                <Link href='/' onClick={() => setIsOpen(false)}>
                  OrudeiArtwork
                </Link>
              </SheetTitle>

              <SheetClose
                render={
                  <button
                    type='button'
                    aria-label='Cerrar menú de navegación'
                    className={cn(
                      'h-auto cursor-pointer touch-manipulation p-0',
                      'border-0 bg-transparent shadow-none outline-none',
                      'text-[10px] font-medium uppercase tracking-[0.22em]',
                      'text-white/60 transition-colors hover:text-white',
                      'focus-visible:text-white',
                    )}
                  />
                }
              >
                Cerrar
              </SheetClose>
            </SheetHeader>

            <nav
              aria-label='Navegación principal'
              className='my-auto flex flex-col items-start gap-7 py-16'
            >
              {navigation.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'group flex items-baseline gap-5',
                        'text-3xl font-medium uppercase tracking-[0.05em]',
                        'transition-colors sm:text-5xl',
                        isActive
                          ? 'text-white'
                          : 'text-white/40 hover:text-white',
                      )}
                    >
                      <span className='text-[9px] font-normal tracking-[0.18em] text-white/30'>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className='flex items-end justify-between gap-6 border-t border-white/10 pt-6'>
              <p className='text-[9px] uppercase tracking-[0.18em] text-white/30'>
                Santiago, Chile
              </p>

              <p className='text-[9px] uppercase tracking-[0.18em] text-white/30'>
                © 2026
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

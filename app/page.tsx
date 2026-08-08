import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { MobileNavigation } from '@/components/layout/mobile-navigation';

export const metadata: Metadata = {
  title: 'OrudeiArtwork',
  description:
    'Dibujo y obras originales realizadas mediante stippling con tiralíneas en Santiago, Chile.',
  alternates: {
    canonical: '/',
  },
};

const navigation = [
  { label: 'Galería', href: '/galeria' },
  { label: 'Originales', href: '/originales' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Envíos', href: '/envios' },
  { label: 'Contacto', href: '/contacto' },
];

export default function HomePage() {
  return (
    <main className='min-h-dvh bg-[#0d0d0d] text-white'>
      <MobileNavigation />

      <div className='hidden min-h-screen lg:grid lg:grid-cols-[minmax(0,1fr)_360px]'>
        <section className='flex min-h-screen items-center justify-center px-8 py-16'>
          <Image
            src='/brand/logo-white.svg'
            alt='Símbolo de OrudeiArtwork'
            width={180}
            height={360}
            priority
            className='h-auto w-[130px]'
          />
        </section>

        <aside className='flex min-h-screen border-l border-white/10 px-12 py-16'>
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
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='relative w-fit text-sm font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:text-white hover:after:w-full'
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <p className='mt-auto pt-20 text-[10px] uppercase tracking-[0.18em] text-white/35'>
              Santiago, Chile
            </p>
          </div>
        </aside>
      </div>

      <section className='flex min-h-[calc(100dvh-5rem)] items-center justify-center px-8 py-16 lg:hidden'>
        <Image
          src='/brand/logo-white.svg'
          alt='Símbolo de OrudeiArtwork'
          width={180}
          height={360}
          priority
          className='h-auto w-[84px] sm:w-[100px]'
        />
      </section>
    </main>
  );
}

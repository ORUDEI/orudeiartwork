import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { Link } from '@/i18n/navigation';

const navigation = [
  { key: 'gallery', href: '/galeria' },
  { key: 'originals', href: '/originales' },
  { key: 'about', href: '/sobre-mi' },
  { key: 'shipping', href: '/envios' },
  { key: 'contact', href: '/contacto' },
] as const;

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const isEnglish = locale === 'en';

  return {
    title: 'OrudeiArtwork',
    description: isEnglish
      ? 'OrudeiArtwork gallery.'
      : 'Galería de OrudeiArtwork.',
    alternates: {
      canonical: isEnglish ? '/en' : '/',
      languages: {
        es: '/',
        en: '/en',
      },
    },
  };
}

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'Navigation',
  });

  return (
    <main className='min-h-dvh bg-[#0d0d0d] text-white'>
      <MobileNavigation />

      {/* Desktop */}
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
              aria-label={
                locale === 'en'
                  ? 'Main navigation'
                  : 'Navegación principal'
              }
              className='mt-16 flex flex-col items-start gap-8'
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='relative w-fit text-sm font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:text-white hover:after:w-full'
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            <div className='mt-auto flex items-end justify-between gap-6 pt-20'>
              <p className='text-[10px] uppercase tracking-[0.18em] text-white/35'>
                Santiago, Chile
              </p>

              <LanguageSwitcher />
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile */}
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

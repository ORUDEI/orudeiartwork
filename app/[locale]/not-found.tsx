import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <main className='min-h-dvh bg-[#0d0d0d] text-white'>
      <div className='grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_360px]'>
        <section className='flex min-h-dvh flex-col px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-20'>
          <header>
            <p className='mb-3 text-[10px] uppercase tracking-[0.2em] text-white/40'>
              Error 404
            </p>

            <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
              {t('title')}
            </h1>
          </header>

          <div className='flex flex-1 items-center py-16 sm:py-24'>
            <div>
              <p className='max-w-4xl text-3xl leading-[1.35] tracking-[-0.025em] text-white/90 sm:text-5xl lg:text-6xl lg:leading-[1.2]'>
                {t('statement')}
              </p>

              <Link
                href='/galeria'
                className='group mt-10 inline-flex w-fit text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:text-white/65'
              >
                <span className='relative pb-2'>
                  {t('backToGallery')}

                  <span
                    aria-hidden='true'
                    className='absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100'
                  />
                </span>
              </Link>
            </div>
          </div>

          <p className='text-[9px] uppercase tracking-[0.18em] text-white/30'>
            Santiago, Chile
          </p>
        </section>

        <aside className='hidden border-l border-white/10 lg:flex lg:flex-col lg:items-center lg:justify-center'>
          <Link href='/' aria-label={t('backHome')}>
            <Image
              src='/brand/logo-white.svg'
              alt=''
              width={120}
              height={280}
              className='h-auto w-14 opacity-80 transition-opacity hover:opacity-100'
            />
          </Link>
        </aside>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === 'en';

  return {
    title: isEnglish ? 'About' : 'Sobre mí',
    description: isEnglish
      ? 'OrudeiArtwork explores fragility, permanence and inner states through drawing.'
      : 'OrudeiArtwork explora la fragilidad, la permanencia y los estados interiores del ser humano a través del dibujo.',
    alternates: {
      canonical: isEnglish ? '/en/sobre-mi' : '/sobre-mi',
      languages: {
        es: '/sobre-mi',
        en: '/en/sobre-mi',
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return (
    <section className='flex min-h-[calc(100vh-8rem)] flex-col'>
      <header>
        <p className='mb-3 text-[10px] uppercase tracking-[0.2em] text-white/40'>
          OrudeiArtwork
        </p>

        <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
          {t('title')}
        </h1>
      </header>

      <div className='flex flex-1 items-center py-20 sm:py-28 lg:py-32'>
        <p className='font-editorial max-w-[980px] text-[2rem] font-normal leading-[1.28] tracking-[-0.01em] text-white/85 sm:text-5xl sm:leading-[1.32] lg:text-[3.5rem] lg:leading-[1.22]'>
          {t('statement')}
        </p>
      </div>

      <footer className='grid gap-5 border-t border-white/10 py-6 sm:grid-cols-2'>
        <div>
          <p className='text-[9px] uppercase tracking-[0.22em] text-white/30'>
            {t('disciplineLabel')}
          </p>

          <p className='mt-2 text-[10px] uppercase tracking-[0.18em] text-white/65'>
            {t('disciplineValue')}
          </p>
        </div>

        <div className='sm:text-right'>
          <p className='text-[9px] uppercase tracking-[0.22em] text-white/30'>
            {t('techniqueLabel')}
          </p>

          <p className='mt-2 text-[10px] uppercase tracking-[0.18em] text-white/65'>
            {t('techniqueValue')}
          </p>
        </div>
      </footer>
    </section>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'OrudeiArtwork explora la fragilidad, la permanencia y los estados interiores del ser humano a través del dibujo.',
  alternates: {
    canonical: '/sobre-mi',
  },
};
export default function AboutPage() {
  return (
    <section className='flex min-h-[calc(100dvh-8rem)] flex-col'>
      <header>
        <p className='mb-3 text-[10px] uppercase tracking-[0.24em] text-white/40'>
          OrudeiArtwork
        </p>

        <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
          Sobre mí
        </h1>
      </header>

      <div className='flex flex-1 items-center py-20 sm:py-28 lg:py-32'>
        <p className='max-w-[980px] text-3xl font-normal leading-[1.35] tracking-[-0.025em] text-white/90 sm:text-5xl lg:text-6xl lg:leading-[1.25]'>
          Mi trabajo explora la fragilidad, la permanencia y los estados
          interiores del ser humano, utilizando el dibujo como una forma de
          hacer visible aquello que permanece oculto.
        </p>
      </div>

      <footer className='grid gap-5 border-t border-white/10 py-6 sm:grid-cols-2'>
        <div>
          <p className='text-[9px] uppercase tracking-[0.22em] text-white/30'>
            Disciplina
          </p>

          <p className='mt-2 text-[10px] uppercase tracking-[0.18em] text-white/65'>
            Dibujo
          </p>
        </div>

        <div className='sm:text-right'>
          <p className='text-[9px] uppercase tracking-[0.22em] text-white/30'>
            Técnica
          </p>

          <p className='mt-2 text-[10px] uppercase tracking-[0.18em] text-white/65'>
            Stippling con tiralíneas
          </p>
        </div>
      </footer>
    </section>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta a OrudeiArtwork para consultar por obras disponibles, encargos o colaboraciones.',
  alternates: {
    canonical: '/contacto',
  },
};

const contactLinks = [
  {
    number: '01',
    label: 'Instagram',
    value: '@orudeiartwork',
    href: 'https://instagram.com/orudeiartwork',
  },
  {
    number: '02',
    label: 'Correo',
    value: 'orudeiartwork@gmail.com',
    href: 'mailto:orudeiartwork@gmail.com',
  },
];

export default function ContactPage() {
  return (
    <section className='flex min-h-[calc(100dvh-8rem)] flex-col'>
      <header>
        <p className='mb-3 text-[10px] uppercase tracking-[0.24em] text-white/40'>
          Conversación
        </p>

        <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
          Contacto
        </h1>
      </header>

      <div className='flex flex-1 items-center py-16 sm:py-24'>
        <div className='w-full'>
          <p className='max-w-4xl text-3xl leading-[1.35] tracking-[-0.025em] text-white/90 sm:text-5xl lg:text-6xl lg:leading-[1.2]'>
            Para consultas sobre obras disponibles, colaboraciones o encargos.
          </p>

          <div className='mt-16 border-t border-white/10'>
            {contactLinks.map((item) => (
              <a
                key={item.number}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className='group grid gap-5 border-b border-white/10 py-7 transition-colors sm:grid-cols-[72px_180px_1fr] sm:items-center'
              >
                <p className='text-[9px] tracking-[0.2em] text-white/25'>
                  {item.number}
                </p>

                <h2 className='text-sm font-medium uppercase tracking-[0.18em] text-white'>
                  {item.label}
                </h2>

                <div className='flex items-center justify-between gap-6'>
                  <p className='text-sm text-white/45 transition-colors group-hover:text-white/75'>
                    {item.value}
                  </p>

                  <span
                    aria-hidden='true'
                    className='shrink-0 text-base text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white'
                  >
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

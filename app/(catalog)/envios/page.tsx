import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Envíos',
  description:
    'Información sobre entregas en Santiago, envíos a regiones y costos de despacho de obras originales.',
  alternates: {
    canonical: '/envios',
  },
};

const shippingItems = [
  {
    number: '01',
    title: 'Santiago',
    description:
      'Las entregas dentro de Santiago se coordinan directamente con la persona compradora.',
  },
  {
    number: '02',
    title: 'Regiones',
    description:
      'Realizo envíos a todo Chile mediante una empresa de transporte acordada previamente.',
  },
  {
    number: '03',
    title: 'Costo',
    description:
      'Información sobre entregas en Santiago, envíos a regiones y costos de despacho de obras originales.',
  },
];

export default function ShippingPage() {
  return (
    <section className='flex min-h-[calc(100dvh-8rem)] flex-col'>
      <header>
        <p className='mb-3 text-[10px] uppercase tracking-[0.24em] text-white/40'>
          Entregas
        </p>

        <h1 className='text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl'>
          Envíos
        </h1>
      </header>

      <div className='flex flex-1 items-center py-16 sm:py-24'>
        <div className='w-full'>
          <div className='grid border-t border-white/10 sm:grid-cols-2'>
            {shippingItems.map((item, index) => {
              const isLast = index === shippingItems.length - 1;

              return (
                <article
                  key={item.number}
                  className={[
                    'border-b border-white/10 py-8',
                    'sm:min-h-52 sm:px-8',
                    index % 2 === 0 ? 'sm:pl-0' : 'sm:border-l',
                    isLast ? 'sm:col-span-2 sm:border-l-0 sm:pr-0' : '',
                  ].join(' ')}
                >
                  <p className='text-[9px] tracking-[0.2em] text-white/30'>
                    {item.number}
                  </p>

                  <h2 className='mt-7 text-sm font-medium uppercase tracking-[0.18em]'>
                    {item.title}
                  </h2>

                  <p className='mt-4 max-w-md text-sm leading-7 text-white/50'>
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <footer className='border-t border-white/10 py-6'>
        <p className='max-w-2xl text-xs leading-6 text-white/40'>
          La modalidad y el costo final se confirman antes de realizar cualquier
          pago.
        </p>
      </footer>
    </section>
  );
}

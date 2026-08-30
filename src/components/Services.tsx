import {
  Square,
  DoorOpen,
  PanelsTopLeft,
  Grid3x3,
  Wrench,
  Siren,
} from 'lucide-react';

const services = [
  {
    icon: Square,
    title: 'Aluminium Windows',
    description:
      'Custom-manufactured casement, sliding & awning windows in white, bronze or charcoal — built on Crealco profiles.',
  },
  {
    icon: DoorOpen,
    title: 'Aluminium Doors',
    description:
      'Sliding, swing and bi-fold systems with secure locking. Commercial and residential, single or double panels.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Glass Installation',
    description:
      'Safety, tempered, laminated and frosted glass cut to size. Fast replacement of broken panes.',
  },
  {
    icon: Grid3x3,
    title: 'Trellis & Security',
    description:
      'Decorative and security trellis manufactured and fitted in white or dark finishes.',
  },
  {
    icon: Wrench,
    title: 'Repairs',
    description:
      'Sticking doors, worn hinges, broken locks, sliding tracks — repaired and replaced quickly.',
  },
  {
    icon: Siren,
    title: '24-Hour Emergency Glass',
    description:
      'Broken glass at night? We respond across the Cape Town area, day or night.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we do</p>
          <h2 className="heading-2 mt-3 text-ink-900">Six things, done properly.</h2>
          <p className="mt-4 text-lg text-ink-500">
            From custom manufacturing to emergency repairs — every job goes
            through the same workshop and the same team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="heading-3 text-ink-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {service.description}
              </p>
              <div className="absolute -bottom-px -right-px h-20 w-20 rounded-tl-full bg-brand-50/50 transition-all duration-300 group-hover:bg-brand-100/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

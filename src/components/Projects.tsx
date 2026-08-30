import { useState } from 'react';

const projects = [
  {
    title: 'Window Installation',
    category: 'Windows',
    image: '/assets/images/Window_Installation.jpeg',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Door Installation',
    category: 'Doors',
    image: '/assets/images/Door_Installation.jpeg',
    span: '',
  },
  {
    title: 'Commercial Doors',
    category: 'Commercial',
    image: '/assets/images/commercial_doors.jpeg',
    span: '',
  },
  {
    title: 'White Trellis & Frames',
    category: 'Security',
    image: '/assets/images/white_trellis_and_door_frames.jpeg',
    span: '',
  },
  {
    title: 'Window Batch Ready',
    category: 'Manufacturing',
    image: '/assets/images/custom_window_manufacturing.jpeg',
    span: '',
  },
  {
    title: 'Custom Manufacturing',
    category: 'Doors',
    image: '/assets/images/10WhatsApp_Image_2026-03-11_at_09.19.23.jpeg',
    span: 'lg:col-span-2',
  },
  {
    title: 'Dark Aluminium Set',
    category: 'Doors',
    image: '/assets/images/dark_aluminium_doors.jpeg',
    span: '',
  },
];

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-x">
        <div className="reveal flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Our work</p>
            <h2 className="heading-2 mt-3 text-ink-900">Selected projects.</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-400">
            A look at recent installations and manufacturing runs from our
            Montague Gardens workshop.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal group relative overflow-hidden rounded-2xl bg-ink-100 ${project.span}`}
              style={{ transitionDelay: `${i * 50}ms` }}
              onMouseEnter={() => setActive(project.title)}
              onMouseLeave={() => setActive(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent transition-opacity duration-300 ${
                  active === project.title ? 'opacity-100' : 'opacity-70'
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">
                  {project.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

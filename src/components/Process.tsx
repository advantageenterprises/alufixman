import { ClipboardList, Ruler, Factory, Truck } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Quote',
    description: 'Send us your needs via WhatsApp or our form. We respond within hours.',
  },
  {
    icon: Ruler,
    title: 'Measure',
    description: 'On-site measure-up in Greater Cape Town — no obligation.',
  },
  {
    icon: Factory,
    title: 'Manufacture',
    description: 'Built in our Montague Gardens workshop on Crealco profiles.',
  },
  {
    icon: Truck,
    title: 'Install',
    description: 'Clean, on-time installation by our own team. Workmanship guaranteed.',
  },
];

export default function Process() {
  return (
    <section id="process" className="overflow-hidden bg-[#020b17] py-24 text-white lg:py-32">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-400">
            — How it works
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            From quotation to{' '}
            <span className="font-script font-semibold italic text-brand-400">installation.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
            A simple four-step process that keeps you in the loop and gets the job done — fast.
          </p>
        </div>

        <div className="reveal mt-14 overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#061322]/70 lg:mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group min-h-[174px] border-b border-white/[0.09] p-6 transition-colors duration-300 hover:bg-white/[0.035] sm:p-7 lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-400">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <step.icon
                    className="h-[17px] w-[17px] text-slate-400 transition-colors duration-300 group-hover:text-brand-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-xs leading-[1.55] text-slate-300 sm:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

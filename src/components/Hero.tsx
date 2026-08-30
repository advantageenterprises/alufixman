import { ArrowRight, MapPin, Star, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal is-visible">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-brand-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                Montague Gardens, Cape Town
              </span>
            </div>

            <h1 className="heading-1 text-ink-900 text-balance">
              Cape Town
              <br />
              <span className="font-script text-brand-500 text-5xl sm:text-6xl lg:text-7xl">
                aluminium
              </span>
              <br />
              crafted & installed.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
              Custom windows, doors, trellis & glass — manufactured in our
              Montague Gardens workshop and installed by our own team. No
              middlemen, no excuses.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:0796751808"
                className="btn-light"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                079 675 1808
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-sm text-ink-500">
                <span className="font-semibold text-ink-700">200+</span> happy
                clients across Cape Town
              </p>
            </div>
          </div>

          <div className="reveal is-visible relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/15">
              <img
                src="/assets/images/Hero_Header.jpeg"
                alt="Alu-Fix-Man branded vehicle delivering custom aluminium"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
            </div>

            <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-ink-900/10 sm:-left-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100">
                <Clock className="h-4.5 w-4.5 text-brand-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-ink-900">Trusted since 2010</p>
                <p className="text-[11px] text-ink-500">15+ years in business</p>
              </div>
            </div>

            <div className="absolute -right-3 bottom-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-ink-900/10 sm:-right-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-100">
                <svg className="h-4.5 w-4.5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-ink-900">~2hr response</p>
                <p className="text-[11px] text-ink-500">Emergency glass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

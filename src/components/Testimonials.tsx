import { Star, Quote, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    text: 'Excellent service! They replaced all the windows in my house and the quality is outstanding. The team was professional, clean and on time.',
    author: 'Resident — Claremont',
  },
  {
    text: 'My front sliding door track was broken and they came the next day. Fixed it in under an hour. Very fair price and no mess left behind.',
    author: 'Homeowner — Table View',
  },
  {
    text: 'Our glass was smashed at 9pm and they came out within 2 hours to board it up. True 24-hour service — can\u2019t fault them.',
    author: 'Tenant — Bellville',
  },
  {
    text: 'We had security trellis fitted throughout our property. Beautifully made and fitted perfectly. The quote was clear, no hidden costs.',
    author: 'Property Owner — Durbanville',
  },
  {
    text: 'Custom-sized aluminium windows for a renovation, manufactured to spec in a few days. Professional advice and a quality finish.',
    author: 'Renovator — Gardens',
  },
  {
    text: 'New aluminium door set installed. The charcoal finish looks amazing and the locks are top quality. Price reasonable, job neat.',
    author: 'Client — Sea Point',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-ink-900">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-400">Client feedback</p>
          <h2 className="heading-2 mt-3 text-white">What our clients say.</h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/30 hover:bg-white/8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-white/10" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink-200">
                {t.text}
              </p>
              <p className="mt-5 text-sm font-semibold text-white">{t.author}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="https://www.facebook.com/people/Alufixman-Glass-Aluminium/100065322967668/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
          >
            See all reviews on Facebook
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

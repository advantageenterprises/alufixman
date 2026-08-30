import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-brand-50">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">— Free quote</p>
            <h2 className="heading-2 mt-4 text-ink-900">
              Let&apos;s get <span className="font-script font-semibold italic text-brand-500">started.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500">
              Fill in the form and we&apos;ll be in touch within hours. For urgent jobs or 24-hour emergency glass, call us directly.
            </p>

            <div className="mt-9 space-y-3">
              <a
                href="tel:0796751808"
                className="group flex min-h-[80px] items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Phone className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-500">Call or WhatsApp</p>
                  <p className="mt-1 font-display text-base font-bold text-ink-900">079 675 1808</p>
                </div>
              </a>

              <a
                href="mailto:alufixman@gmail.com"
                className="group flex min-h-[80px] items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Mail className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-500">Email us</p>
                  <p className="mt-1 font-display text-base font-bold text-ink-900">alufixman@gmail.com</p>
                </div>
              </a>

              <div className="flex min-h-[80px] items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <MapPin className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-500">Workshop</p>
                  <p className="mt-1 font-display text-base font-bold text-ink-900">Montague Gardens, Cape Town</p>
                </div>
              </div>

              <div className="flex min-h-[80px] items-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white">
                  <Clock className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-red-600">Emergency line</p>
                  <p className="mt-1 font-display text-base font-bold text-ink-900">24-Hour Glass Replacement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

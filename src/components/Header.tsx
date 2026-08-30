import { useEffect, useState } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-md shadow-ink-900/5 backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between lg:h-20">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src="/assets/images/alu-fix-man-logo copy.jpg"
              alt="Alu-Fix-Man logo"
              className="h-10 w-14 object-contain lg:h-12 lg:w-16"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-extrabold tracking-tight text-ink-900 lg:text-lg">
                Alu-Fix-Man
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-500 lg:text-[10px]">
                Windows · Doors · Glass
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:0796751808"
              className="flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-brand-600"
            >
              <Phone className="h-3.5 w-3.5" />
              079 675 1808
            </a>
            <a href="#contact" className="btn-primary !py-2.5 !px-5 !text-xs">
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-ink-100 bg-white shadow-lg shadow-ink-900/10 lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-1 flex flex-col gap-2 border-t border-ink-100 pt-3">
              <a
                href="tel:0796751808"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-ink-700"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                079 675 1808
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary !py-2.5 !text-xs"
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

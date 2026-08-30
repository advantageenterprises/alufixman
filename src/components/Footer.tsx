import { Phone, MapPin, Mail, Clock, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#020b17] pb-8 pt-16 text-slate-400">
      <div className="container-x">
        <div className="grid gap-10 border-b border-white/[0.1] pb-12 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/images/alu-fix-man-logo copy.jpg"
                alt="Alu-Fix-Man logo"
                className="h-12 w-16 rounded-md object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold tracking-tight text-white">Alu-Fix-Man</span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-400">Windows · Doors · Glass</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Cape Town&apos;s trusted aluminium manufacturers. Custom windows, doors, glass &amp; trellis — built to last in our Montague Gardens workshop.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-400">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li><a href="tel:0796751808" className="flex items-center gap-3 transition-colors hover:text-white"><Phone className="h-4 w-4" />079 675 1808</a></li>
              <li><a href="https://wa.me/27796751808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-white"><WhatsAppIcon className="h-4 w-4" />WhatsApp Us</a></li>
              <li><a href="mailto:alufixman@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white"><Mail className="h-4 w-4" />alufixman@gmail.com</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4" />Montague Gardens</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-400">Hours</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center justify-between gap-5"><span className="flex items-center gap-3"><Clock className="h-4 w-4" />Mon – Fri</span><span>8:00 – 17:00</span></li>
              <li className="flex items-center justify-between gap-5"><span className="pl-7">Saturday</span><span>8:00 – 13:00</span></li>
              <li className="flex items-center justify-between gap-5 border-t border-brand-400/30 pt-4 font-semibold text-brand-400"><span>Emergency Glass</span><span>24 hrs</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Alu-Fix-Man. Crafted in Cape Town.</p>
          <a href="#top" className="flex items-center gap-2 font-semibold text-brand-400 transition-colors hover:text-white">Back to top <ArrowUp className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}

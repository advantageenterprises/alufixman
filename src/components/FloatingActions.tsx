import { useState, useRef, useEffect } from 'react';
import { Phone, X, Send, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '27796751808';
const PHONE_DISPLAY = '079 675 1808';
const WELCOME_MESSAGE =
  'Hi there! Thanks for reaching out to Alu-Fix-Man. How can we help you with aluminium windows, doors or glass today?';

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showLabels, setShowLabels] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [chatOpen]);

  useEffect(() => {
    const t = setTimeout(() => setShowLabels(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const sendToWhatsApp = () => {
    const text =
      message.trim() ||
      "Hi Alu-Fix-Man, I'd like to get a quote for aluminium work.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setMessage('');
    setChatOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {chatOpen && (
        <div className="flex w-[320px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ink-900/20 animate-fade-up">
          <div className="flex items-center gap-3 bg-brand-500 px-4 py-3.5 text-white">
            <img
              src="/assets/images/alu-fix-man-logo copy.jpg"
              alt="Alu-Fix-Man"
              className="h-10 w-12 object-contain ring-2 ring-white/30"
            />
            <div className="flex-1">
              <p className="font-display text-sm font-bold leading-tight">
                Alu-Fix-Man
              </p>
              <p className="flex items-center gap-1.5 text-[11px] text-brand-50">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                Typically replies within minutes
              </p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-white/15"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 bg-brand-50 px-4 py-5">
            <div className="flex items-start gap-2">
              <img
                src="/assets/images/alu-fix-man-logo copy.jpg"
                alt=""
                className="mt-0.5 h-7 w-9 shrink-0 rounded-md object-contain"
              />
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm text-ink-800 shadow-sm">
                {WELCOME_MESSAGE}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img
                src="/assets/images/alu-fix-man-logo copy.jpg"
                alt=""
                className="mt-0.5 h-7 w-9 shrink-0 rounded-md object-contain"
              />
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm text-ink-800 shadow-sm">
                For urgent or after-hours glass emergencies, call us at{' '}
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
                  className="font-semibold text-brand-600 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </div>
            </div>
          </div>

          <div className="border-t border-ink-100 bg-white p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendToWhatsApp();
                }}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-ink-200 bg-brand-50/50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
              />
              <button
                onClick={sendToWhatsApp}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-all hover:scale-105 hover:bg-brand-600 active:scale-95"
                aria-label="Send on WhatsApp"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-ink-400">
              Opens WhatsApp with your message ready to send
            </p>
          </div>
        </div>
      )}

      {!chatOpen && showLabels && (
        <div className="flex flex-col items-end gap-2">
          <a
            href="tel:0796751808"
            className="group flex items-center gap-2 rounded-full bg-ink-900 py-2 pl-3 pr-4 text-xs font-semibold text-white shadow-lg shadow-ink-900/20 transition-all hover:scale-105 hover:bg-ink-800"
          >
            <Phone className="h-3.5 w-3.5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      )}

      <div className="flex items-center gap-3">
        <a
          href="tel:0796751808"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 text-white shadow-lg shadow-ink-900/30 transition-all hover:scale-110 hover:bg-ink-800"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="h-5 w-5" />
        </a>

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:bg-[#1ebe5d]"
          aria-label={chatOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        >
          {chatOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <WhatsAppIcon className="h-6 w-6" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[9px] font-bold text-white ring-2 ring-white">
                1
              </span>
            </>
          )}
          {!chatOpen && (
            <span className="absolute inset-0 animate-ping rounded-full bg-brand-500 opacity-20" />
          )}
        </button>
      </div>

      {chatOpen && (
        <button
          onClick={() => setChatOpen(false)}
          className="flex items-center gap-1 text-xs font-medium text-ink-500 transition-colors hover:text-ink-700"
        >
          <ChevronUp className="h-3 w-3" />
          Close
        </button>
      )}
    </div>
  );
}

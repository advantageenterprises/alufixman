import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const services = [
  'Aluminium Windows',
  'Aluminium Doors',
  'Glass Installation',
  'Trellis & Security',
  'Repairs',
  '24-Hour Emergency Glass',
  'Other',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    propertyAddress: '',
    service: '',
    preferredDate: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name, phone, service, and a brief message.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('quote_requests').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: null,
        service: form.service,
        message: form.message.trim(),
        property_address: form.propertyAddress.trim() || null,
        preferred_date: form.preferredDate || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', phone: '', propertyAddress: '', service: '', preferredDate: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please call us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[28px] bg-white p-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100"><CheckCircle2 className="h-8 w-8 text-brand-600" /></div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">Request received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">Thanks for reaching out. We&apos;ll be in touch within hours. For urgent jobs, call us directly at 079 675 1808.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700">Send another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-7 text-ink-900 shadow-2xl shadow-black/20 sm:p-8 lg:p-9">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">Request a quote</h3>
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-600">Replies in hours</span>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-700">Full Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="input-field" />
        </div>
        <div>
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-700">Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="082 123 4567" className="input-field" />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-700">Property Address</label>
        <input type="text" name="propertyAddress" value={form.propertyAddress} onChange={handleChange} placeholder="Where should we quote?" className="input-field" />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-700">Service Required *</label>
        <select name="service" value={form.service} onChange={handleChange} required className="input-field cursor-pointer">
          <option value="">Select a service...</option>
          {services.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </div>

      <div className="mt-5 sm:max-w-[280px]">
        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-700">Preferred Date</label>
        <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} className="input-field" />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-700">Additional Notes</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={3} placeholder="Tell us a little about what you need..." className="input-field resize-none" />
      </div>

      {status === 'error' && <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"><AlertCircle className="h-4 w-4 shrink-0" />{errorMsg}</div>}

      <button type="submit" disabled={status === 'loading'} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ink-900/20 transition-all duration-200 hover:bg-ink-800 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
        {status === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" />Sending...</> : <>Send Quote Request <ArrowRight className="h-4 w-4" /></>}
      </button>
      <p className="mt-3 text-center text-[11px] text-ink-400">We respond within hours. Urgent jobs — call 079 675 1808.</p>
    </form>
  );
}

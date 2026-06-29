import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';

// Where quote requests are delivered. Replace with the real address.
// To deliver server-side instead of opening the email client, swap the
// `mailto:` in handleSubmit for a fetch() to your endpoint (e.g. Formspree).
const QUOTE_EMAIL = 'enquiry@caribvestio.com';

const fieldBase =
  'w-full bg-transparent border-0 border-b rounded-none px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 transition-colors';

export default function Quote() {
  const { items, setQty, removeItem, clear } = useQuote();
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
    if (errors[id]) setErrors((er) => ({ ...er, [id]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.company.trim()) next.company = 'Please enter your company.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    return next;
  };

  const composeBody = () => {
    const lines = [
      `New bulk quote request from ${form.name} — ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      '',
      'Items requested:',
      ...items.map((i) => `- ${i.item} (${i.industryTitle}) × ${i.qty}`),
    ];
    if (form.notes.trim()) lines.push('', 'Notes:', form.notes.trim());
    return lines.join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = `Bulk Quote Request — ${form.company}`;
    const mailto = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeBody())}`;
    // Opens the buyer's email client with the request pre-filled.
    window.location.href = mailto;

    setStatus('success');
    clear();
  };

  const borderFor = (key) => (errors[key] ? 'border-error focus:border-error' : 'border-outline-variant focus:border-primary');

  // Success confirmation
  if (status === 'success') {
    return (
      <section className="w-full max-w-2xl mx-auto px-grid-margin pt-32 md:pt-40 pb-section-gap-mobile md:pb-section-gap-desktop text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-on-tertiary-container mb-6" />
        <h1 className="font-display-md text-display-md text-primary dark:text-on-primary mb-4 tracking-tight">Quote request ready</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          Your email app should have opened with the request pre-filled — just hit send. If it didn't, email us at{' '}
          <a href={`mailto:${QUOTE_EMAIL}`} className="text-primary dark:text-on-primary underline">{QUOTE_EMAIL}</a>. Our team replies within 48 hours.
        </p>
        <Link to="/collections" className="btn btn-primary">Browse more industries <ArrowRight className="h-4 w-4" /></Link>
      </section>
    );
  }

  // Empty basket
  if (items.length === 0) {
    return (
      <section className="w-full max-w-2xl mx-auto px-grid-margin pt-32 md:pt-40 pb-section-gap-mobile md:pb-section-gap-desktop text-center">
        <div className="grid place-items-center mx-auto h-16 w-16 rounded-full bg-surface-container-high text-on-surface-variant mb-6">
          <FileText className="h-7 w-7" />
        </div>
        <h1 className="font-display-md text-display-md text-primary dark:text-on-primary mb-4 tracking-tight">Your quote is empty</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          Browse an industry and tap the items you need — they'll collect here so you can request one consolidated bulk quote.
        </p>
        <Link to="/collections" className="btn btn-primary">Browse industries <ArrowRight className="h-4 w-4" /></Link>
      </section>
    );
  }

  return (
    <section className="w-full max-w-container-max mx-auto px-grid-margin pt-32 md:pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
      <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold mb-3">Build a Quote</p>
      <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary dark:text-on-primary mb-3 tracking-tight">
        Your bulk quote
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-2xl">
        Set quantities, add your details, and send it over. We'll source quotes from vetted manufacturers and reply within 48 hours.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter items-start">
        {/* Items */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-headline-md text-primary dark:text-on-primary">{items.length} item{items.length > 1 ? 's' : ''}</h2>
            <button onClick={clear} className="font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors">Clear all</button>
          </div>
          {items.map((i) => (
            <div key={i.id} className="flex items-center gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-card">
              <div className="flex-grow min-w-0">
                <p className="font-headline-md text-lg text-primary dark:text-on-primary truncate">{i.item}</p>
                <p className="font-label-md text-label-md uppercase tracking-wider text-gold-dim dark:text-gold">{i.industryTitle}</p>
              </div>
              {/* Qty stepper */}
              <div className="flex items-center rounded-lg border border-outline-variant">
                <button aria-label="Decrease quantity" onClick={() => setQty(i.id, i.qty - 1)} className="grid place-items-center h-9 w-9 text-on-surface-variant hover:text-primary disabled:opacity-40" disabled={i.qty <= 1}>
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={i.qty}
                  onChange={(e) => setQty(i.id, parseInt(e.target.value, 10) || 1)}
                  aria-label={`Quantity for ${i.item}`}
                  className="w-12 bg-transparent text-center font-body-md text-on-surface tabular-nums outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button aria-label="Increase quantity" onClick={() => setQty(i.id, i.qty + 1)} className="grid place-items-center h-9 w-9 text-on-surface-variant hover:text-primary">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button aria-label={`Remove ${i.item}`} onClick={() => removeItem(i.id)} className="grid place-items-center h-9 w-9 shrink-0 text-on-surface-variant hover:text-error transition-colors">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <Link to="/collections" className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary dark:text-on-primary hover:text-gold-dim dark:hover:text-gold transition-colors pt-2">
            <Plus className="h-4 w-4" /> Add more items
          </Link>
        </div>

        {/* Details form */}
        <div className="lg:col-span-5">
          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8 shadow-card space-y-6">
            <h2 className="font-headline-md text-headline-md text-primary dark:text-on-primary">Your details</h2>
            <div>
              <label htmlFor="name" className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">Full name</label>
              <input id="name" type="text" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} className={`${fieldBase} ${borderFor('name')}`} placeholder="Jane Doe" />
              {errors.name && <p className="mt-1.5 font-body-sm text-body-sm text-error">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="company" className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">Company</label>
              <input id="company" type="text" value={form.company} onChange={handleChange} aria-invalid={!!errors.company} className={`${fieldBase} ${borderFor('company')}`} placeholder="Acme Corp Ltd." />
              {errors.company && <p className="mt-1.5 font-body-sm text-body-sm text-error">{errors.company}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">Work email</label>
              <input id="email" type="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} className={`${fieldBase} ${borderFor('email')}`} placeholder="jane@company.com" />
              {errors.email && <p className="mt-1.5 font-body-sm text-body-sm text-error">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">Phone / WhatsApp</label>
              <input id="phone" type="tel" value={form.phone} onChange={handleChange} className={`${fieldBase} border-outline-variant focus:border-primary`} placeholder="+1 (876) ___-____" />
            </div>
            <div>
              <label htmlFor="notes" className="block font-label-md text-label-md text-on-surface mb-2 uppercase tracking-wider">Notes (sizes, logo, deadline…)</label>
              <textarea id="notes" rows="3" value={form.notes} onChange={handleChange} className={`${fieldBase} border-outline-variant focus:border-primary resize-none`} placeholder="e.g. 20×S, 40×M, 15×L · embroidered logo on left chest · needed by August" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Send quote request <ArrowRight className="h-4 w-4" /></button>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center">No payment now — this just starts the conversation.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

import { ChevronDown } from 'lucide-react';

export const faqs = [
  {
    q: 'Is there a minimum order quantity?',
    a: "Minimums vary by item and manufacturer. Share your numbers in a quote and we'll confirm the MOQ for each piece — we work with both small teams and large, multi-site rollouts.",
  },
  {
    q: 'How long do orders take?',
    a: 'Most bulk orders are produced and delivered in roughly 3–6 weeks, depending on quantity and customisation. You\'ll get a firm timeline with your quote.',
  },
  {
    q: 'Can you add our logo?',
    a: 'Yes — embroidery or printing, with placement to your spec. Send your logo with the quote and we\'ll include branding in the costings.',
  },
  {
    q: 'How does payment work?',
    a: 'You pay the manufacturer directly — transparent pricing with no middleman markup. Payment terms are outlined clearly in your quote.',
  },
  {
    q: 'Do you deliver across Jamaica and the Caribbean?',
    a: 'Yes. Our ground teams coordinate production and delivery across Jamaica and the wider Caribbean, with sourcing support from the Caribbean and India.',
  },
  {
    q: 'Can we see samples first?',
    a: 'Absolutely. We can arrange physical or digital samples so you can check fabric, fit and logo placement before committing to a full run.',
  },
];

export default function Faq({ items = faqs, title = 'Questions, answered' }) {
  return (
    <section className="w-full max-w-3xl mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
      <div className="text-center mb-12">
        <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">FAQ</span>
        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mt-3 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="divide-y divide-outline-variant border-y border-outline-variant">
        {items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 list-none">
              <span className="font-headline-md text-lg text-primary dark:text-on-primary">{item.q}</span>
              <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-dim dark:text-gold transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="font-body-md text-body-md text-on-surface-variant pb-5 -mt-1 max-w-2xl">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

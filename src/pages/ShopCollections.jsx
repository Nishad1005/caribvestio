import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Scale, Droplets, Check } from 'lucide-react';
import { industries } from '@/data/industries';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const categories = [
  'Shirts & Blouses', 'Suiting & Blazers', 'Polos & Casual', 'Scrubs & Clinical',
  'Hi-Vis & Safety', 'Footwear', 'Headwear & Accessories', 'Logo & Branding',
];

const reasons = [
  { icon: Factory, title: 'No middleman markup', desc: 'Sourced straight from vetted manufacturers — you pay the maker, not a reseller.' },
  { icon: Scale, title: 'Quotes you can compare', desc: 'Multiple supplier quotes side by side, so you choose on price and lead time.' },
  { icon: Droplets, title: 'Climate-ready fabrics', desc: 'Breathable, hard-wearing materials suited to the Caribbean working day.' },
];

export default function ShopCollections() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center px-grid-margin overflow-hidden">
        <img alt="Caribbean professionals in tailored uniforms" className="absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdzgDJKloEZzY1cwTmM702h-qBCNk29TgPXloDqq2STSk8jV7q5toFavVxU8rfm7PQD6pdO7fXLHDCRgIgLzLCV7iNUkIV9_xO1DWbSDkzbJFarSGMuhUti7ATte7_-D-_9HpJ_ZT2G_sXzYuLGyr4nV1keqELgdmnmfUOKxxa4S4zvCvLlaFYfmK52qxKu4JceE_TdwGWtEA4opulZXpI6cWqtXelx9AyTgjeltbcdNRK9AVUCc_bnzvqtiH795bS1-U9bGfFIdz9" />
        <div aria-hidden="true" className="absolute inset-0 bg-on-primary-fixed/55" />
        <div aria-hidden="true" className="absolute inset-0 photo-tint" />
        <motion.div initial="hidden" animate="visible" variants={reveal} className="relative z-10 text-center max-w-3xl mx-auto pt-24 md:pt-0">
          <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold mb-4 inline-block">Collections</span>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-6 tracking-tight">Uniforms for every Caribbean industry</h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto">
            Browse the sectors we outfit, then build a bulk quote sourced direct from manufacturers — no middlemen.
          </p>
        </motion.div>
      </section>

      {/* Browse by industry */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="text-center mb-14 max-w-2xl mx-auto">
          <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">By industry</span>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mt-3 tracking-tight">Choose your sector</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
          {industries.map((ind) => (
            <motion.div key={ind.slug} variants={reveal}>
              <Link to={`/industries/${ind.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl ambient-shadow">
                <img alt={`${ind.title} uniforms`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={ind.image} />
                <div aria-hidden="true" className="absolute inset-0 photo-tint" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-headline-md text-2xl text-white tracking-tight">{ind.title}</h3>
                  <p className="mt-1 font-body-sm text-body-sm text-white/75">{ind.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">
                    View {ind.title} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
          {/* CTA tile */}
          <motion.div variants={reveal} className="flex flex-col justify-center rounded-2xl border border-outline-variant bg-surface-container-low p-8 text-center aspect-[4/5]">
            <h3 className="font-headline-md text-2xl text-primary dark:text-on-primary mb-3 tracking-tight">Not sure where to start?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Tell us your team and we'll point you to the right kit.</p>
            <Link to="/quote" className="btn btn-primary justify-center">Build a quote <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What we supply */}
      <section className="w-full bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop transition-colors duration-500">
        <div className="max-w-container-max mx-auto px-grid-margin">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">What we supply</span>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mt-3 tracking-tight">Across every category</h2>
          </motion.div>
          <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {categories.map((c) => (
              <motion.li key={c} variants={reveal} className="flex items-center gap-2.5 rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 shadow-card">
                <span className="grid place-items-center h-5 w-5 shrink-0 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container"><Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" /></span>
                <span className="font-body-md text-body-md text-on-surface">{c}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-6 text-center font-body-sm text-body-sm text-on-surface-variant">…and more. Tailor-made requirements are accommodated wherever possible.</p>
        </div>
      </section>

      {/* Why source through us */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="md:col-span-5">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">Why CaribVestio</span>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mt-3 mb-8 tracking-tight">Source smarter, not harder</h2>
            <div className="space-y-6">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex items-start gap-4">
                    <span className="shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-on-primary-fixed text-on-primary"><Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span>
                    <div>
                      <h3 className="font-headline-md text-lg text-primary dark:text-on-primary mb-1">{r.title}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 mt-10 md:mt-0 relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-raised relative z-10">
              <img alt="Professional reviewing uniform options on a tablet" className="w-full h-full object-cover" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz6KvlZWxrFlynSiydkxmCALRYm2nTsbRzGJ4Ckvr26zuIisNjXBNQFhtcHUa1wxLKh4grliLNUuUShbK3Zty36o43LXHZU_1O-Tuwtr0TbteAbhxoQkwtMohuTio6uXW6PEND5PLUcS58xdnMt2-xfAdp3eX38MpY_Ty5_ctFzSdSFpgMzfyWdST-HXS_TRSKGU5ZG8FzCWykSnm0L5-0r9Ys-zcghMOodVWMe2kLwwj3W4R3RdbBUCKXUZiT23fNoaYMpIw4rRHV" />
            </div>
            <div aria-hidden="true" className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
            <div aria-hidden="true" className="absolute -top-8 -right-8 w-64 h-64 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin pb-section-gap-mobile md:pb-section-gap-desktop">
        <div className="relative overflow-hidden rounded-3xl bg-on-primary-fixed dark:bg-black p-12 md:p-20 text-center shadow-overlay">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 tracking-tight">Ready to outfit your team?</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">Add the pieces you need and we'll bring you the right manufacturer quotes within 48 hours.</p>
          <Link to="/quote" className="btn btn-accent px-10 text-lg">Build your quote</Link>
        </div>
      </section>
    </>
  );
}

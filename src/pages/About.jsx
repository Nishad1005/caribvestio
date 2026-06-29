import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Factory, Scale, Globe, ArrowRight } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const values = [
  { icon: Factory, title: 'No middlemen', desc: 'You buy straight from vetted manufacturers — never a marked-up reseller.' },
  { icon: Scale, title: 'Compare & save', desc: 'We gather quotes from multiple suppliers so you choose on price and lead time.' },
  { icon: Globe, title: 'Caribbean & India network', desc: 'Ground teams coordinate sourcing and delivery end-to-end across both regions.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin pt-32 md:pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="md:col-span-6 space-y-6">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">About CaribVestio</span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary dark:text-on-primary tracking-tight">
              Your direct line to the world's uniform manufacturers
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              CaribVestio is the single point of contact between Caribbean businesses and the manufacturers who make their uniforms — comparing supplier quotes, cutting out middlemen, and coordinating every order from first enquiry to final delivery.
            </p>
            <Link to="/quote" className="btn btn-primary">
              Start a bulk quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="md:col-span-6 mt-8 md:mt-0 relative aspect-[4/5] rounded-2xl overflow-hidden ambient-shadow"
          >
            <img alt="Professional team in tailored corporate uniforms" className="w-full h-full object-cover" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGgLN56OWNjDBMB8hRSE4ezbA5IncqbpHxIjmMc0vzGdS7sEeT2j8mVhs9yP8UXZf3sYFDj3buSG0fcVPM5M7uUE6XXxk2DauM82PEDh8lyfXa5uZur_wyzGa7nMEbdONYfmO1XSSB_LPl_igSDaUEn574XiTiiJBoOtBA6yBYC2v26zYtf8kEcZMX7rCoeKHBqXOd9nkKr5P6Srw2weaLDJJCd1r6TyDCa9u8ltsoMZp0ea1s6VkocvN--E_8nplA5kcpKG71rN98" />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop transition-colors duration-500">
        <div className="max-w-container-max mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 order-2 md:order-1 relative aspect-square rounded-2xl overflow-hidden ambient-shadow mt-8 md:mt-0"
          >
            <img alt="Examining uniform fabric swatches" className="w-full h-full object-cover" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBec35zrNaQCxt3uW-fsTu02NzvwzczIE-_Yij44iPGGhTUL1oxEvVRrrEevUqnmpgW8LudEmKRaRZJ7lWkr0xz07iKMY3_E00PReJ7ca9rvBz-Jn8CEF5NGDAKbjXSw1m2jeVJlyJ7rgyOjo8SuP4if9d6PCXnuGuMIqJNEHcSaSmeNNB2cn20juYeTDAdL6QmWBJYU1W7CaoR9VgDViXc7RWsa_-Ee0lDWzW8m5PBERt8wmPyqdZr-EyvU5K0cUJI4MMQPBkEPGsh" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="md:col-span-6 md:col-start-7 order-1 md:order-2 space-y-6"
          >
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">Our Story</span>
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary dark:text-on-primary tracking-tight">Built to cut out the middleman</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Buying uniforms in bulk used to mean going through layers of resellers — each adding markup and delay. We saw Caribbean businesses paying more for less control, with no easy way to compare suppliers.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              So we built the direct alternative: relationships with vetted manufacturers, transparent multi-supplier quotes, payment straight to the maker, and on-the-ground coordination across the Caribbean and India. One partner, the right price, every step handled.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="text-center mb-12">
          <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">What we stand for</span>
          <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary dark:text-on-primary mt-3 tracking-tight">How we work</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={reveal}
                className="flex flex-col items-start gap-4 rounded-2xl border border-outline-variant bg-surface-container-lowest p-8 shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="grid place-items-center h-12 w-12 rounded-full bg-on-primary-fixed text-on-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-headline-md text-xl text-primary dark:text-on-primary">{v.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{v.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="w-full relative py-section-gap-mobile md:py-section-gap-desktop overflow-hidden">
        <img alt="Caribbean corporate team in uniform" className="absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaB78WXb_zCYHnTq2UBxTA7AQgS7Jwo72CcwkImhAznN8IvO3Gap2Bq6EXeppGrQIIdThGCR8j850cvlaWIz5HV3siOiOksK2rmoRhzxFgrwZ_aWeFqfoGOTaQDCR8yBb9WMXn1xFOZSWj0z3lUQ9CweHNZbARZIB-GjgO6P4VsXFDGT_4MOkBTQu5bzucIYwg8qcc6rhm8I7rpj-qbcpueowEfPj1vj681D8SBRouHpPREL9xCo_ij_gZvmC98HpqGQ6VFlcPAF-n" />
        <div aria-hidden="true" className="absolute inset-0 bg-on-primary-fixed/85" />
        <div aria-hidden="true" className="absolute inset-0 photo-tint" />
        <div className="relative z-10 max-w-container-max mx-auto px-grid-margin text-center">
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-6 tracking-tight">Source smarter. Outfit faster.</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">Tell us what your team needs — we'll bring you the right manufacturer quotes within 48 hours.</p>
          <Link to="/quote" className="btn btn-accent px-10 text-lg">Request a Bulk Quote</Link>
        </div>
      </section>
    </>
  );
}

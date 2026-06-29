import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ClipboardList, Scale, BadgeCheck, Truck, Boxes, Ruler, Sparkles, Globe, ArrowRight } from 'lucide-react';

// A process node whose scale + gold activation ring are driven by the
// timeline's scroll progress (lights up as the line reaches it).
function TimelineNode({ progress, threshold, reduce, children }) {
  const scale = useTransform(progress, [threshold - 0.14, threshold], [0.8, 1]);
  const ringOpacity = useTransform(progress, [threshold - 0.14, threshold], [0, 1]);

  if (reduce) {
    return (
      <span className="relative z-10 mb-6 mx-auto grid h-12 w-12 place-items-center rounded-full bg-on-primary-fixed text-on-primary">
        {children}
      </span>
    );
  }

  return (
    <motion.span style={{ scale }} className="relative z-10 mb-6 mx-auto grid h-12 w-12 place-items-center rounded-full bg-on-primary-fixed text-on-primary">
      <motion.span aria-hidden="true" style={{ opacity: ringOpacity }} className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-gold" />
      {children}
    </motion.span>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const steps = [
  { icon: ClipboardList, title: 'Submit your requirement', desc: 'Tell us the items, quantities, sizes and any branding — or build it item-by-item in your quote.' },
  { icon: Scale, title: 'Compare supplier quotes', desc: 'We gather quotes from multiple direct manufacturers so you can weigh price against lead time.' },
  { icon: BadgeCheck, title: 'Approve sample & pay direct', desc: 'Check the sample for fabric, fit and logo, then pay the manufacturer directly — no markup.' },
  { icon: Truck, title: 'Production & delivery', desc: 'Our Caribbean and India teams coordinate production and deliver to your door.' },
];

const benefits = [
  { icon: Boxes, title: 'Flexible quantities', desc: 'Small teams to large multi-site rollouts — MOQs confirmed per item.' },
  { icon: Ruler, title: 'Full size runs', desc: 'Mixed size breakdowns handled across your whole team.' },
  { icon: Sparkles, title: 'Logo & branding', desc: 'Embroidery or printing, placed exactly to your spec.' },
  { icon: Globe, title: 'Regional delivery', desc: 'Coordinated across Jamaica and the wider Caribbean.' },
];

export default function BulkOrders() {
  const reduce = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 85%', 'end 45%'] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center px-grid-margin py-section-gap-mobile md:py-section-gap-desktop bg-on-primary-fixed text-on-primary overflow-hidden">
        <img alt="Team in coordinated uniforms" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_cqzU4g2XYA80zM8t9mMjZG3z12iaV3Kvv0e99GXutGny0t7N_hhKut546EldVn-RWgVBUt9rVK1KsETXL7it1Nnbl9HLhHQhkm4t7QujkqzJzDvCsigFvG_z6D_pNbHN1cs9T4obA8KqxFbMtSB5a2A7dmw1u9xuE_aupkqFyx5Gf1u9QsImHB0k3jTQCAuACfk7idJv3-USMEYWJSeRHAc2zxE11iO6gBneLdt3br8FjozAhiCWMeBaGCC4nxgkJCwOYvujlDvn" />
        <div aria-hidden="true" className="absolute inset-0 photo-tint" />
        <motion.div initial="hidden" animate="visible" variants={reveal} className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold mb-4">Bulk Orders</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tight">Bulk uniform ordering, without the runaround</h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mb-10">
            One brief, multiple direct-manufacturer quotes to compare, and a single team coordinating the whole order across the Caribbean and India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote" className="btn btn-accent">Build your quote <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link to="/contact" className="btn btn-outline border-on-primary/40 text-on-primary hover:bg-on-primary/10">Talk to our team</Link>
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="text-center mb-14 max-w-2xl mx-auto">
          <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">How it works</span>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mt-3 tracking-tight">Four steps from brief to delivery</h2>
        </motion.div>
        <div ref={timelineRef} className="relative">
          {/* Base track + scroll-driven gold progress line (desktop) */}
          <div aria-hidden="true" className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-outline-variant" />
          {reduce ? (
            <div aria-hidden="true" className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-dim to-gold" />
          ) : (
            <motion.div aria-hidden="true" style={{ scaleX: lineScale }} className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 origin-left bg-gradient-to-r from-gold-dim to-gold" />
          )}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-grid-gutter gap-y-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const threshold = 0.14 + i * 0.27;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: reduce ? 0 : 0.08 * i }}
                  className="text-center"
                >
                  <TimelineNode progress={scrollYProgress} threshold={threshold} reduce={reduce}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </TimelineNode>
                  <span className="block font-label-md text-label-md uppercase tracking-wider text-gold-dim dark:text-gold mb-2">Step {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-headline-md text-lg text-primary dark:text-on-primary mb-2">{s.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mx-auto">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="w-full bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop transition-colors duration-500">
        <div className="max-w-container-max mx-auto px-grid-margin">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="text-center mb-14 max-w-2xl mx-auto">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">What we handle</span>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mt-3 tracking-tight">Built for the realities of bulk</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-x-grid-gutter gap-y-10 max-w-4xl mx-auto">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={reveal} className="flex items-start gap-5">
                  <span className="shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-on-primary-fixed text-on-primary"><Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" /></span>
                  <div>
                    <h3 className="font-headline-md text-lg text-primary dark:text-on-primary mb-1.5">{b.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
        <div className="relative overflow-hidden rounded-3xl bg-on-primary-fixed dark:bg-black p-12 md:p-20 text-center shadow-overlay">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 tracking-tight">Ready to price your order?</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">Add the items you need and we'll bring you the right manufacturer quotes within 48 hours.</p>
          <Link to="/quote" className="btn btn-accent px-10 text-lg">Build your quote</Link>
        </div>
      </section>
    </>
  );
}

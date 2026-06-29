import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardList, FileText, CheckCircle2, Truck, Factory, Scale, HandCoins, Scissors, Globe, Package, Sparkles, Ruler, Layers, Quote, ChevronDown } from 'lucide-react';
import IndustryCarousel from '@/components/ui/carousel-card';
import Faq from '@/components/Faq';
import CountUp from '@/components/CountUp';
import Aurora from '@/components/Aurora';
import Marquee from '@/components/Marquee';
import Magnetic from '@/components/Magnetic';
import { LogoIcon } from '@/components/Logo';
import { industries } from '@/data/industries';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], reduce ? [0, 0] : [0, 90]);

  // Each step's icon performs a one-time gesture on scroll-in (and on hover)
  // that echoes the action: submit lifts, quote tilts, approve pops, delivery drives.
  const steps = [
    { icon: ClipboardList, title: 'Submit Requirement', desc: 'Tell us your team size, industry, items, and any tailor-made needs through our simple portal.', gesture: { y: [0, -6, 0] }, hover: { y: -4 } },
    { icon: FileText, title: 'Compare Supplier Quotes', desc: 'We gather quotes from multiple direct manufacturers so you can compare price and lead time — no middleman markup.', gesture: { rotate: [0, -8, 0] }, hover: { rotate: -6 }, badge: '48h' },
    { icon: CheckCircle2, title: 'Approve & Pay Direct', desc: 'Review the sample for quality, fit and logo placement, then pay the manufacturer directly.', gesture: { scale: [1, 1.2, 1] }, hover: { scale: 1.12 } },
    { icon: Truck, title: 'Production & Delivery', desc: 'Production is coordinated by our ground teams in the Caribbean and India and delivered to your door.', gesture: { x: [0, 8, 0] }, hover: { x: 5 }, ambient: { x: [0, 4, 0] } },
  ];

  const [active, setActive] = useState(0);
  const ActiveIcon = steps[active].icon;

  const usps = [
    { icon: Factory, title: 'Direct from manufacturers', desc: 'You buy straight from the makers — never middlemen.', gesture: { y: [0, -5, 0] }, hover: { y: -3 } },
    { icon: Scale, title: 'Compare multiple quotes', desc: 'Quotes from several suppliers, side by side, to choose from.', gesture: { rotate: [0, -10, 10, 0] }, hover: { rotate: -8 } },
    { icon: HandCoins, title: 'Pay the maker directly', desc: 'Transparent pricing with payment direct to the manufacturer.', gesture: { y: [0, -4, 0] }, hover: { y: -3 } },
    { icon: Scissors, title: 'Tailor-made options', desc: 'Custom specifications accommodated wherever possible.', gesture: { rotate: [0, -14, 0] }, hover: { rotate: -12 } },
    { icon: Globe, title: 'Caribbean & India teams', desc: 'On-the-ground contacts coordinate every order end-to-end.', gesture: { rotate: [0, 360] }, hover: { rotate: 20 } },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[819px] md:h-[921px] flex items-center justify-start overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, filter: 'brightness(0.8)' }}
          animate={{ scale: 1, filter: 'brightness(1)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ y: heroY }}
          alt="Hero background"
          className="absolute -top-[10%] left-0 w-full h-[120%] object-cover z-0"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP9CYlLsY4qhILS55j6QohRqbL2FSzpoB3CuhU78z-9ULt_tJBtx1Nec7gGvK4YMifpBusY_lDmMl1mFCZzuGiqd761A3TsUuo0vqJGrROfvTBLa9vJsGSo87XAanY03gKO-RcslYYqjCfXe9zRNV38Qfyvy1DQSptLmOQTU5XD0NgE-F024Xreij-CCmBXTItHAIt8I1QXh45KNpxxqJ8uTpArBBz10iK5O6zBBvyBSQKCT_jvkUtdbwWOeHL0UNoteGSXxs_ggRW"
        />
        <div className="absolute inset-0 hero-overlay z-10 pointer-events-none"></div>
        <Aurora className="z-[12] opacity-30 mix-blend-screen" />
        <div aria-hidden="true" className="absolute inset-0 z-10 grain pointer-events-none"></div>
        <div className="relative z-20 w-full max-w-container-max mx-auto px-grid-margin pt-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-on-primary"
          >
            <motion.span variants={itemVariants} className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-[0.2em] text-gold mb-5">
              <span className="h-px w-8 bg-gold" /> Bulk Uniforms · Direct from the Source
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-6 tracking-tight">
              Your one-stop shop for bulk Caribbean uniforms.
            </motion.h1>
            <motion.p variants={itemVariants} className="font-body-lg text-body-lg mb-10 text-on-primary/90 max-w-xl">
              We connect you directly to vetted manufacturers — no middlemen. Compare quotes from multiple suppliers, pay the maker direct, and get tailor-made uniforms coordinated end-to-end across the Caribbean and India.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Magnetic>
                <Link to="/bulk-orders" className="btn btn-accent">
                  Request a Bulk Quote
                </Link>
              </Magnetic>
              <Link to="/collections" className="btn btn-outline border-on-primary/40 text-on-primary hover:bg-on-primary/10">
                Explore Collections
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll cue */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-on-primary/70"
        >
          <motion.div animate={reduce ? undefined : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Standard inclusions band */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full bg-surface-container-low border-y border-outline-variant/60 dark:border-zinc-800 py-10 md:py-12 transition-colors duration-500"
      >
        <div className="max-w-container-max mx-auto px-grid-margin grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-y-0 lg:divide-x lg:divide-outline-variant/50">
          {[
            { icon: Truck, label: 'Fast Caribbean Delivery' },
            { icon: Package, label: 'Bulk Orders' },
            { icon: Sparkles, label: 'Logo Embroidery' },
            { icon: Ruler, label: 'Custom Sizing' },
            { icon: Layers, label: 'Quality Fabrics' },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.label} variants={itemVariants} className="group flex flex-col items-center gap-3 text-center px-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-on-primary-fixed text-on-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-gold group-hover:text-on-primary-fixed">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant transition-colors group-hover:text-primary dark:group-hover:text-on-primary">
                  {b.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Why CaribVestio — USP */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop transition-colors duration-500">
        <LogoIcon className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 text-on-primary-fixed/[0.04] dark:text-white/[0.04]" />
        <div aria-hidden="true" className="absolute inset-0 grain pointer-events-none" />
        <div className="relative max-w-container-max mx-auto px-grid-margin">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold">Why CaribVestio</span>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mt-3 mb-4 tracking-tight">One source. No middlemen.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We're your single point of contact for bulk uniforms — sourcing directly from vetted manufacturers and coordinating every step so you get the right kit at the right price.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {usps.map((u, i) => {
              const Icon = u.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  key={i}
                  className="group flex flex-col items-start gap-4 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-on-primary-fixed/30 hover:shadow-raised dark:hover:border-zinc-600"
                >
                  <motion.span
                    whileHover={reduce ? undefined : u.hover}
                    whileInView={reduce ? undefined : u.gesture}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                    className="grid place-items-center h-12 w-12 rounded-full bg-on-primary-fixed text-on-primary"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </motion.span>
                  <h3 className="font-headline-md text-lg leading-snug text-primary dark:text-on-primary">{u.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{u.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Category Grid — full-bleed carousel */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-container-max mx-auto px-grid-margin"
        >
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-zinc-100 mb-4 tracking-tight">Uniform Solutions by Industry</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-400 max-w-2xl mx-auto">Tailored professional wear designed for the specific demands of your sector, combining functional design with sophisticated aesthetics.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="px-grid-margin md:px-8"
        >
          <IndustryCarousel
            cardsPerView={4}
            data={industries.map((ind) => ({
              id: ind.slug,
              title: ind.title,
              href: `/industries/${ind.slug}`,
              content: ind.blurb,
              imgUrl: ind.image,
            }))}
          />
        </motion.div>
      </section>

      {/* How Bulk Orders Work */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-high dark:bg-zinc-900/50 w-full transition-colors duration-500">
        <div className="max-w-container-max mx-auto px-grid-margin">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-zinc-100 mb-4 tracking-tight">Streamlined Bulk Ordering</h2>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-400 max-w-2xl mx-auto">From initial consultation to final delivery, our process is designed to be seamless for businesses of all sizes across the Caribbean.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-grid-gutter">
            {/* Left: sticky active visual (lg+) */}
            <div className="hidden lg:block">
              <div className="sticky top-32 flex h-[440px] flex-col justify-center overflow-hidden rounded-3xl bg-surface-container-lowest dark:bg-zinc-800 ambient-shadow p-12">
                <div className="absolute right-10 top-12 bottom-12 flex flex-col items-center justify-between">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        i === active ? 'bg-gold scale-125' : i < active ? 'bg-on-tertiary-container' : 'bg-outline-variant'
                      }`}
                    />
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <span className="mb-7 grid h-20 w-20 place-items-center rounded-2xl bg-on-primary-fixed text-on-primary">
                      <ActiveIcon className="h-9 w-9" strokeWidth={1.75} />
                    </span>
                    <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold mb-3">
                      Step {active + 1} of {steps.length}
                    </p>
                    <h3 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary tracking-tight">
                      {steps[active].title}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: scroll-through steps */}
            <div>
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    onViewportEnter={() => setActive(i)}
                    viewport={{ margin: '-45% 0px -45% 0px' }}
                    className="flex flex-col justify-center border-b border-outline-variant/40 py-10 last:border-0 lg:min-h-[62vh] lg:border-0"
                  >
                    <div className="mb-4 flex items-center gap-3 lg:hidden">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-on-primary-fixed text-on-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="font-label-md text-label-md uppercase tracking-wider text-gold-dim dark:text-gold">Step {i + 1}</span>
                    </div>
                    <p className="hidden lg:block font-display-lg text-[80px] font-bold leading-none text-outline-variant/40 mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3
                      className={`font-headline-md text-2xl md:text-3xl mb-3 tracking-tight transition-colors duration-300 ${
                        active === i
                          ? 'text-primary dark:text-on-primary'
                          : 'text-primary dark:text-on-primary lg:text-on-surface-variant lg:dark:text-zinc-500'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-400 max-w-md">{step.desc}</p>
                    {step.badge && (
                      <span className="mt-4 inline-block rounded-full bg-on-tertiary-container px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {step.badge} turnaround
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof: Stats */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop w-full max-w-container-max mx-auto px-grid-margin">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '500+', label: 'Businesses outfitted' },
            { value: '120k+', label: 'Garments delivered' },
            { value: '14', label: 'Islands served' },
            { value: '98%', label: 'On-time delivery' },
          ].map((stat, i) => (
            <motion.div variants={itemVariants} key={i}>
              <p className="font-display-md text-display-md text-primary dark:text-on-primary mb-2 tabular-nums"><CountUp value={stat.value} /></p>
              <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Social Proof: Testimonial */}
      <section className="pb-section-gap-mobile md:pb-section-gap-desktop w-full max-w-container-max mx-auto px-grid-margin">
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-low rounded-3xl p-10 md:p-16 text-center shadow-card"
        >
          <Quote className="text-gold h-9 w-9 mb-4 inline-block" />
          <blockquote className="font-headline-md text-2xl md:text-3xl leading-snug text-primary dark:text-on-primary max-w-3xl mx-auto mb-8">
            “CaribVestio outfitted all four of our resort properties in under six weeks. The fit, the fabric for our climate, the embroidery — every detail was on point.”
          </blockquote>
          <figcaption className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Operations Director — Hospitality Group, Montego Bay
          </figcaption>
        </motion.figure>
      </section>

      {/* Social Proof: Trusted-by sectors (marquee) */}
      <section className="pb-section-gap-mobile md:pb-section-gap-desktop w-full">
        <p className="text-center font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant mb-8 px-grid-margin">
          Trusted by teams across the Caribbean
        </p>
        <Marquee>
          {['Security', 'Hospitality', 'Healthcare', 'Schools', 'Corporate', 'Finance', 'Aviation', 'Retail'].map((sector) => (
            <span key={sector} className="mx-8 font-headline-md text-xl md:text-2xl text-on-surface-variant/70 tracking-tight">
              {sector}
              <span className="ml-8 text-gold/50">•</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* FAQ */}
      <Faq />

      {/* Final CTA */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop w-full max-w-container-max mx-auto px-grid-margin">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-on-primary-fixed dark:bg-black rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-outline-variant/10 dark:border-outline-variant/20 shadow-overlay"
        >
          <Aurora />
          <div className="relative z-10">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 tracking-tight">Ready to Dress Your Team Professionally?</h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">Join hundreds of Caribbean businesses that trust CaribVestio for their corporate identity. Let's create uniforms your team will be proud to wear.</p>
            <Magnetic>
              <Link to="/contact" className="btn btn-accent px-10 text-lg">
                Start Your Order Today
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </section>
    </>
  );
}
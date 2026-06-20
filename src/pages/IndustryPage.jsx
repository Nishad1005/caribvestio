import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { industries, getIndustry } from '@/data/industries';

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = getIndustry(slug);

  if (!industry) return <Navigate to="/collections" replace />;

  const others = industries.filter((i) => i.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <img
          src={industry.image}
          alt={`${industry.title} uniforms`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-grid-margin pb-12 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed mb-4"
          >
            Industry Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white tracking-tight mb-4"
          >
            {industry.title} Uniforms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="font-body-lg text-body-lg text-white/90 max-w-2xl"
          >
            {industry.tagline}
          </motion.p>
        </div>
      </section>

      {/* Intro + what we supply */}
      <section className="w-full max-w-container-max mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
          <div className="lg:col-span-5">
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-on-primary mb-6 tracking-tight">
              Outfitting {industry.title.toLowerCase()} teams
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">{industry.blurb}</p>
            <Link to="/contact" className="btn btn-primary">
              Request a Bulk Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-5">
              What we supply
            </h3>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {industry.items.map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-2.5 rounded-xl border border-outline-variant/60 bg-surface-container-lowest px-4 py-3 shadow-card"
                >
                  <span className="grid place-items-center h-5 w-5 shrink-0 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <p className="mt-5 font-body-sm text-body-sm text-on-surface-variant">
              …and more. Tailor-made requirements are accommodated wherever possible.
            </p>
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="w-full bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop transition-colors duration-500">
        <div className="max-w-container-max mx-auto px-grid-margin">
          <h2 className="font-headline-md text-headline-md text-primary dark:text-on-primary mb-8">Other industries we serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-grid-gutter">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/industries/${o.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl ambient-shadow"
              >
                <img src={o.image} alt={o.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-0 left-0 p-5 font-headline-md text-xl text-white">{o.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

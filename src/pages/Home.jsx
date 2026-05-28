import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[819px] md:h-[921px] flex items-center justify-start overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, filter: 'brightness(0.8)' }}
          animate={{ scale: 1, filter: 'brightness(1)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP9CYlLsY4qhILS55j6QohRqbL2FSzpoB3CuhU78z-9ULt_tJBtx1Nec7gGvK4YMifpBusY_lDmMl1mFCZzuGiqd761A3TsUuo0vqJGrROfvTBLa9vJsGSo87XAanY03gKO-RcslYYqjCfXe9zRNV38Qfyvy1DQSptLmOQTU5XD0NgE-F024Xreij-CCmBXTItHAIt8I1QXh45KNpxxqJ8uTpArBBz10iK5O6zBBvyBSQKCT_jvkUtdbwWOeHL0UNoteGSXxs_ggRW"
        />
        <div className="absolute inset-0 hero-overlay z-10 pointer-events-none"></div>
        <div className="relative z-20 w-full max-w-container-max mx-auto px-grid-margin pt-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-on-primary"
          >
            <motion.p variants={itemVariants} className="font-body-lg text-body-lg mb-10 text-on-primary/90">
              Premium corporate wear designed for the climate, crafted for durability, and styled to elevate your brand's professional image across the Caribbean.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="/bulk-orders" className="bg-on-primary-fixed dark:bg-primary-fixed dark:text-on-primary-fixed text-on-primary hover:bg-on-tertiary-container dark:hover:bg-primary-fixed-dim transition-all duration-300 px-8 py-4 rounded-full font-label-md text-label-md text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(218,226,253,0.3)]">
                Request a Bulk Quote
              </Link>
              <Link to="/collections" className="border border-on-primary text-on-primary hover:bg-on-primary/10 transition-colors duration-300 px-8 py-4 rounded-full font-label-md text-label-md text-center hover:scale-105">
                Explore Collections
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-surface-container-low py-8 border-b border-surface-variant dark:border-zinc-800 dark:bg-zinc-900 transition-colors duration-500"
      >
        <div className="max-w-container-max mx-auto px-grid-margin flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-on-surface-variant dark:text-inverse-on-surface font-label-md text-label-md hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-on-primary-fixed dark:text-primary-fixed">local_shipping</span> Fast Caribbean Delivery</div>
          <div className="flex items-center gap-2 text-on-surface-variant dark:text-inverse-on-surface font-label-md text-label-md hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-on-primary-fixed dark:text-primary-fixed">inventory_2</span> Bulk Orders</div>
          <div className="flex items-center gap-2 text-on-surface-variant dark:text-inverse-on-surface font-label-md text-label-md hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-on-primary-fixed dark:text-primary-fixed">styler</span> Logo Embroidery</div>
          <div className="flex items-center gap-2 text-on-surface-variant dark:text-inverse-on-surface font-label-md text-label-md hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-on-primary-fixed dark:text-primary-fixed">straighten</span> Custom Sizing</div>
          <div className="flex items-center gap-2 text-on-surface-variant dark:text-inverse-on-surface font-label-md text-label-md hover:text-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-on-primary-fixed dark:text-primary-fixed">texture</span> Quality Fabrics</div>
        </div>
      </motion.section>

      {/* Category Grid */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-container-max mx-auto px-grid-margin overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary dark:text-zinc-100 mb-4 tracking-tight">Uniform Solutions by Industry</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-400 max-w-2xl mx-auto">Tailored professional wear designed for the specific demands of your sector, combining functional design with sophisticated aesthetics.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-grid-gutter"
        >
          {/* Categories */}
          {[
            { title: 'Hospitality', link: '/hospitality-collection', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFezUSMmI0WB6OAxOqWip_K1JccFT6AxpzIGRBhJ5O3FzPn_LXyfwCpEDpiNAPg9iWNwUPFV6QxSZRcAunJu3P_V0uGSrxOGbptNlWqgrV1zYRFjj-piw2QGzdZaCUUCoMUAgW015WOCOJJDRIBsmgRjKfiaINu2D3z-wh-_ovb6qu8qrIWIXmDAGvHpOwRTbDzy_b5XBk3GAvpDjLDJd3iyDPTu2I6YNut68VkltmVf1VqlblYxzgGsIwqOC0e3aYeWSxjoCo35xT" },
            { title: 'Healthcare', link: '/collections', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMyBUvam58tPXrEuxNswq-8SgbExxSKvfJTlMbDWxMrqX_v7iXUN6rUFjOPUoQva9FXKj7QcbC2GM1uJmy7Ma5PLB3SNmzvufz-pMo2eDmGrY8Htqf8UTn4pItkR1vU7elwtvaBNRaLrqNp9Z3bmQUCF3SGlde2iJFm6-ehWsKnuFlMKJOQYdT8FkoSSDZST4j9sbYDFlyh-i8ItHp7nXearvbwcVza3kBzfAs-WobmSKxrTRKru227d1dv16jeJrRz6RGqqQ8xW9r" },
            { title: 'Corporate', link: '/executive-suite', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOwfUxbOLGiaU4yJAjZaCBTFZtJWGBuQsIvVVT6ThXONOT-St7fvDdVEnwrO8PUUFD7kNG_VuXjKwyrcJLi-nug9gD0zIr85IIvKJU8X_UNa2E4OnlqTGDnB64fDO4e36dlZbF1vRv7lpfTo0FIBieWPKAoJlaW6sI0dWal60_jzQCfSWedZeDkJhZJEfGiy6oaf_BEA6WVgVtiIOVP5gnMcNI12vDHl9NLTINz45TMFvbgbJsjfaPh2T7LyWjVCsnBsF8_XuMl_wC" },
            { title: 'Industrial', link: '/industries', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsPgRNfVgfsggQA_oOmjsJ7Z3vX7D_4gYucoUOalxUbDNEkZi4ZPfc9wruI2zBE-PcjGc-clGCiH2_op8xySosTLnkhG6JuWWP3i6n8FbsoFVBgczWjAzJPj5wRQDzAXhKfl-IGklb7T6ceR7OtMRWAStjRKyR64BJ6GcuZhz8DKGjx0chMifXwRyEfEpYt_r-GXjxIBWKl6TB9qRWRYypy907a0nNVA6qXkHJGAnRMKgbmD2L9G6idntWLpocnG9NlU3l-DSTPVu-" }
          ].map((cat, i) => (
            <motion.div variants={itemVariants} key={i}>
              <Link to={cat.link} className="group relative rounded-2xl overflow-hidden aspect-[4/5] ambient-shadow bg-surface-container-lowest dark:bg-zinc-900 block cursor-pointer">
                <img alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cat.img}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-1 transform group-hover:-translate-y-1 transition-transform duration-300">{cat.title}</h3>
                  <span className="text-secondary-fixed flex items-center gap-1 font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
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
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {/* Steps */}
            {[
              { num: 1, title: 'Submit Requirement', desc: 'Share your team size, industry, and specific uniform needs through our simple online portal.' },
              { num: 2, title: 'Get a Quote', desc: 'Receive a detailed, transparent proposal including customization options and timeline within 48 hours.' },
              { num: 3, title: 'Approve Sample', desc: 'Review physical or digital samples to ensure fabric quality, fit, and logo placement meet your standards.' },
              { num: 4, title: 'Production & Delivery', desc: 'We manufacture your uniforms with precision and deliver them directly to your location anywhere in the Caribbean.' }
            ].map((step, i) => (
              <motion.div variants={itemVariants} key={i} className="bg-surface-container-lowest dark:bg-zinc-800 p-8 rounded-2xl ambient-shadow relative hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-on-primary-fixed dark:bg-zinc-700 text-on-primary dark:text-zinc-100 rounded-full flex items-center justify-center font-headline-md text-headline-md mb-6">{step.num}</div>
                <h4 className="font-headline-md text-xl mb-3 text-primary dark:text-zinc-100">{step.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-zinc-400">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-container-max mx-auto px-grid-margin">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-on-primary-fixed dark:bg-black rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-outline-variant/10 dark:border-outline-variant/20 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white dark:from-primary-fixed to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 tracking-tight">Ready to Dress Your Team Professionally?</h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">Join hundreds of Caribbean businesses that trust CaribVestio for their corporate identity. Let's create uniforms your team will be proud to wear.</p>
            <Link to="/contact" className="bg-secondary-fixed dark:bg-primary-fixed text-on-secondary-fixed dark:text-on-primary-fixed hover:bg-secondary-fixed-dim dark:hover:bg-primary-fixed-dim transition-all duration-300 px-10 py-4 rounded-full font-label-md text-label-md text-lg inline-block hover:scale-105 hover:shadow-lg">
              Start Your Order Today
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
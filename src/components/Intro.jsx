import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * Brand opening animation: a gold "thread" stitches the CV monogram on a navy
 * panel, the wordmark + tagline rise in, then the panel lifts away like a curtain.
 * Plays once per session (add ?intro to the URL to replay during review).
 */
export default function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const force = new URLSearchParams(window.location.search).has('intro');
    if (!force && sessionStorage.getItem('cv-intro-seen')) return;

    setShow(true);
    document.body.style.overflow = 'hidden';

    const hold = reduce ? 700 : 2500;
    const timer = setTimeout(() => {
      sessionStorage.setItem('cv-intro-seen', '1');
      setShow(false);
    }, hold);

    return () => clearTimeout(timer);
  }, [reduce]);

  const unlock = () => {
    document.body.style.overflow = '';
  };

  const chevron = 'M12 22 L39 22 L50 60 L61 22 L88 22 L50 93 Z';
  const flap = 'M61 22 L91 12 L95 26 L65 34 Z';

  return (
    <AnimatePresence onExitComplete={unlock}>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-on-primary-fixed text-white"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div aria-hidden="true" className="absolute inset-0 grain opacity-[0.07]" />

          {/* Monogram: gold thread stitches the chevron, then it fills white */}
          <svg viewBox="0 0 100 100" className="mb-7 h-24 w-24">
            <motion.path
              d={chevron}
              fill="transparent"
              stroke="#c8a24c"
              strokeWidth={2.5}
              strokeLinejoin="round"
              initial={{ pathLength: reduce ? 1 : 0, opacity: 1 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: reduce ? 0 : 1.1, ease: 'easeInOut' }}
            />
            <motion.path
              d={chevron}
              fill="#ffffff"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0 : 1.05, duration: 0.45 }}
            />
            <motion.path
              d={flap}
              fill="#c8a24c"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              transition={{ delay: reduce ? 0 : 1.1, duration: 0.4 }}
            />
          </svg>

          {/* Wordmark rises in */}
          <div className="overflow-hidden">
            <motion.span
              className="block font-label-lg text-2xl font-bold uppercase tracking-[0.28em] text-white"
              initial={{ y: reduce ? 0 : '120%' }}
              animate={{ y: 0 }}
              transition={{ delay: reduce ? 0 : 1.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              CaribVestio
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.span
            className="mt-3 font-label-md text-label-md uppercase tracking-[0.25em] text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0.1 : 1.7, duration: 0.5 }}
          >
            Uniforms. Workwear. Worldwide.
          </motion.span>

          {/* Hairline accent */}
          <motion.span
            aria-hidden="true"
            className="mt-7 block h-px bg-gold/60"
            initial={{ width: 0 }}
            animate={{ width: reduce ? 64 : 120 }}
            transition={{ delay: reduce ? 0.1 : 1.9, duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

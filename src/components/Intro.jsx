import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * Brand opening animation. A gold "thread" stitches the CV monogram over a
 * soft glow, the wordmark + tagline rise in, then two navy panels part like
 * doors to reveal the site.
 * Plays once per session (add ?intro to the URL to replay during review).
 */
export default function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    const force = new URLSearchParams(window.location.search).has('intro');
    return force || !sessionStorage.getItem('cv-intro-seen');
  });

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = 'hidden';

    const hold = reduce ? 700 : 2600;
    const timer = setTimeout(() => {
      sessionStorage.setItem('cv-intro-seen', '1');
      setShow(false);
    }, hold);

    return () => clearTimeout(timer);
  }, [show, reduce]);

  const unlock = () => {
    document.body.style.overflow = '';
  };

  const chevron = 'M12 22 L39 22 L50 60 L61 22 L88 22 L50 93 Z';
  const flap = 'M61 22 L91 12 L95 26 L65 34 Z';
  const panelEase = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence onExitComplete={unlock}>
      {show && (
        <motion.div key="intro" className="fixed inset-0 z-[100] overflow-hidden" initial={{ opacity: 1 }}>
          {/* Reveal panels (single fade under reduced motion) */}
          {reduce ? (
            <motion.div className="absolute inset-0 bg-on-primary-fixed" exit={{ opacity: 0 }} transition={{ duration: 0.4 }} />
          ) : (
            <>
              <motion.div className="absolute inset-x-0 top-0 h-1/2 bg-on-primary-fixed" exit={{ y: '-100%' }} transition={{ duration: 0.7, ease: panelEase, delay: 0.1 }} />
              <motion.div className="absolute inset-x-0 bottom-0 h-1/2 bg-on-primary-fixed" exit={{ y: '100%' }} transition={{ duration: 0.7, ease: panelEase, delay: 0.1 }} />
            </>
          )}

          {/* Content */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div aria-hidden="true" className="absolute inset-0 grain opacity-[0.07]" />

            {!reduce && (
              <motion.div
                aria-hidden="true"
                className="absolute h-72 w-72 rounded-full bg-gold/20 blur-3xl"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: [0, 0.85, 0.5], scale: 1 }}
                transition={{ duration: 2.2, ease: 'easeOut' }}
              />
            )}

            {/* Monogram: gold thread stitches, then fills white */}
            <svg viewBox="0 0 100 100" className="relative mb-7 h-24 w-24">
              <motion.path
                d={chevron}
                fill="transparent"
                stroke="#c8a24c"
                strokeWidth={2.5}
                strokeLinejoin="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: reduce ? 0 : 1.1, ease: 'easeInOut' }}
              />
              <motion.path d={chevron} fill="#ffffff" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduce ? 0 : 1.05, duration: 0.45 }} />
              <motion.path d={flap} fill="#c8a24c" initial={{ opacity: 0 }} animate={{ opacity: 0.55 }} transition={{ delay: reduce ? 0 : 1.1, duration: 0.4 }} />
            </svg>

            {/* Wordmark rises in */}
            <div className="relative overflow-hidden">
              <motion.span
                className="block font-label-lg text-2xl font-bold uppercase tracking-[0.28em] text-white"
                initial={{ y: reduce ? 0 : '120%' }}
                animate={{ y: 0 }}
                transition={{ delay: reduce ? 0 : 1.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                CaribVestio
              </motion.span>
            </div>

            <motion.span
              className="relative mt-3 font-label-md text-label-md uppercase tracking-[0.25em] text-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0.1 : 1.7, duration: 0.5 }}
            >
              Uniforms. Workwear. Worldwide.
            </motion.span>

            <motion.span
              aria-hidden="true"
              className="relative mt-7 block h-px bg-gold/60"
              initial={{ width: 0 }}
              animate={{ width: reduce ? 64 : 120 }}
              transition={{ delay: reduce ? 0.1 : 1.9, duration: 0.6 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

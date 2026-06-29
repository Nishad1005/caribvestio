import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion, useMotionValue, useTransform, animate } from 'framer-motion';

/**
 * Animates a number from 0 to its target when it scrolls into view.
 * Accepts string values with suffixes ("500+", "120k+", "98%", "14").
 * Honours prefers-reduced-motion (renders the final value immediately).
 */
export default function CountUp({ value, duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();

  const match = String(value).match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : String(value);

  const count = useMotionValue(0);
  const text = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(count, target, { duration, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, reduce, target, duration, count]);

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {target}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}

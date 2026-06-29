import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Wraps a child (button/link) so it gently pulls toward the cursor and springs
 * back on leave. Disabled under reduced motion. Render inline-block content.
 */
export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const ys = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  if (reduce) return <span className={`inline-block ${className}`}>{children}</span>;

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: xs, y: ys }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}

import { Link } from 'react-router-dom';

/**
 * CaribVestio "CV" monogram — a wrapped-cloth chevron.
 * Approximate recreation of the brand sheet (Concept Direction 2).
 * Uses `currentColor`, so it inherits text color (navy in light, white in dark).
 * Swap the <path> data here if you later get the original vector.
 */
export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Bold downward "V" chevron */}
      <path fill="currentColor" d="M12 22 L39 22 L50 60 L61 22 L88 22 L50 93 Z" />
      {/* Folded ribbon flap (top-right) — the "wrapped cloth" cue */}
      <path fill="currentColor" opacity="0.5" d="M61 22 L91 12 L95 26 L65 34 Z" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  tagline?: boolean;
  to?: string;
}

/**
 * Full brand lockup: icon + CARIBVESTIO wordmark (+ optional tagline).
 * Renders as a link to home by default.
 */
export default function Logo({ className = '', tagline = false, to = '/' }: LogoProps) {
  return (
    <Link
      to={to}
      aria-label="CaribVestio — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoIcon className="h-8 w-8 shrink-0 text-primary dark:text-on-primary transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-label-lg text-xl font-bold uppercase tracking-[0.18em] text-primary dark:text-on-primary">
          CaribVestio
        </span>
        {tagline && (
          <span className="mt-1.5 text-[10px] font-label-md uppercase tracking-[0.22em] text-on-surface-variant">
            Uniforms. Workwear. Worldwide.
          </span>
        )}
      </span>
    </Link>
  );
}

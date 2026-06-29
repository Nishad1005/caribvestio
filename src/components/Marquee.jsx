/**
 * Infinite horizontal marquee. Renders `children` twice so the loop is seamless,
 * pauses on hover, and fades at the edges. Freezes under reduced motion.
 */
export default function Marquee({ children, className = '' }) {
  return (
    <div
      className={`group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center" aria-hidden="false">
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

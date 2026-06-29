/**
 * Soft, slowly-drifting colour blobs for behind dark sections — adds depth and
 * warmth without competing with content. Decorative; freezes under reduced motion
 * (global media query stops the keyframes).
 */
export default function Aurora({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="aurora-a absolute -top-1/3 -left-1/4 h-[60%] w-[60%] rounded-full bg-gold/20 blur-3xl" />
      <div className="aurora-b absolute top-1/4 right-0 h-[55%] w-[55%] rounded-full bg-tertiary-fixed-dim/20 blur-3xl" />
      <div className="aurora-c absolute -bottom-1/4 left-1/4 h-[55%] w-[55%] rounded-full bg-primary-fixed/15 blur-3xl" />
    </div>
  );
}

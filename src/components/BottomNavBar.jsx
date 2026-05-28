import { Link } from 'react-router-dom';

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-3 pb-safe px-4 md:hidden bg-background/90 dark:bg-on-primary-fixed/90 backdrop-blur-lg border-t border-outline-variant shadow-[0px_-4px_16px_rgba(0,0,0,0.05)] docked full-width rounded-t-xl">
      <Link className="flex flex-col items-center justify-center text-primary dark:text-on-primary font-bold font-label-md text-label-md active:bg-surface-container-high transition-all" to="/">
        <span className="material-symbols-outlined mb-1">home</span>
        Home
      </Link>
      <Link className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim opacity-60 font-label-md text-label-md active:bg-surface-container-high transition-all" to="/collections">
        <span className="material-symbols-outlined mb-1">shopping_bag</span>
        Shop
      </Link>
      <Link className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim opacity-60 font-label-md text-label-md active:bg-surface-container-high transition-all" to="/industries">
        <span className="material-symbols-outlined mb-1">domain</span>
        Industries
      </Link>
      <Link className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim opacity-60 font-label-md text-label-md active:bg-surface-container-high transition-all" to="/contact">
        <span className="material-symbols-outlined mb-1">request_quote</span>
        Quote
      </Link>
    </nav>
  );
}

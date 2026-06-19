import { Link, useLocation } from 'react-router-dom';

const items = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/collections', icon: 'shopping_bag', label: 'Collections' },
  { to: '/contact', icon: 'request_quote', label: 'Quote' },
  { to: '/login', icon: 'person', label: 'Login' },
];

export default function BottomNavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-3 pb-safe px-4 md:hidden bg-background/90 dark:bg-on-primary-fixed/90 backdrop-blur-lg border-t border-outline-variant shadow-[0px_-4px_16px_rgba(0,0,0,0.05)] rounded-t-xl">
      {items.map((item) => {
        const isActive = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            aria-current={isActive ? 'page' : undefined}
            className={`flex flex-col items-center justify-center font-label-md text-label-md transition-all active:bg-surface-container-high ${
              isActive
                ? 'text-primary dark:text-on-primary font-bold'
                : 'text-secondary dark:text-secondary-fixed-dim opacity-60'
            }`}
          >
            <span className="material-symbols-outlined mb-1">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

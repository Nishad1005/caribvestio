import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import QuoteFab from './QuoteFab';
import ScrollProgress from './ScrollProgress';
import { StickyFooter } from './ui/sticky-footer';

export default function Layout({ children }) {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-secondary-fixed selection:text-primary-container min-h-screen flex flex-col transition-colors duration-500">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[101] focus:top-3 focus:left-3 focus:rounded-lg focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:font-label-md focus:text-label-md">
        Skip to content
      </a>
      <ScrollProgress />
      <div className="bg-on-primary-fixed text-on-primary py-2 px-4 text-center font-label-md text-label-md w-full">
        Custom uniforms for Caribbean businesses | Bulk orders available
      </div>
      <TopNavBar />
      <main id="main" tabIndex={-1} className="flex-grow flex flex-col w-full relative outline-none">
        {children}
      </main>
      <StickyFooter />
      <QuoteFab />
      <BottomNavBar />
    </div>
  );
}

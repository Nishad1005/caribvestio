import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import { StickyFooter } from './ui/sticky-footer';

export default function Layout({ children }) {
  return (
    <div className="bg-background dark:bg-zinc-950 text-on-surface dark:text-zinc-50 font-body-md antialiased selection:bg-secondary-fixed selection:text-primary-container min-h-screen flex flex-col transition-colors duration-500">
      <div className="bg-on-primary-fixed text-on-primary py-2 px-4 text-center font-label-md text-label-md w-full">
        Custom uniforms for Caribbean businesses | Bulk orders available
      </div>
      <TopNavBar />
      <main className="flex-grow flex flex-col w-full relative">
        {children}
      </main>
      <StickyFooter />
      <BottomNavBar />
    </div>
  );
}

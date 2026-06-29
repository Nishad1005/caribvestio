import React, { useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { MenuBar } from '@/components/ui/glow-menu';
import Logo from '@/components/Logo';
import { useAuth } from '@/context/AuthContext';
import { Home, ShoppingBag, Package, Info, Sun, Moon, MessageSquare, User } from 'lucide-react';

export default function TopNavBar() {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      href: "/",
      gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      icon: ShoppingBag,
      label: "Collections",
      href: "/collections",
      gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-500",
    },
    {
      icon: Package,
      label: "Bulk Orders",
      href: "/bulk-orders",
      gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "text-red-500",
    },
    {
      icon: Info,
      label: "About",
      href: "/about",
      gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
      iconColor: "text-purple-500",
    },
    {
      icon: MessageSquare,
      label: "Contact",
      href: "/contact",
      gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
      iconColor: "text-pink-500",
    },
    {
      icon: User,
      label: user ? "Portal" : "Login",
      href: user ? "/portal" : "/login",
      gradient: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(2,132,199,0.06) 50%, rgba(3,105,161,0) 100%)",
      iconColor: "text-sky-500",
    },
    {
      icon: theme === 'dark' ? Moon : Sun,
      label: "Theme",
      href: "#",
      gradient: "radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(202,138,4,0.06) 50%, rgba(161,98,7,0) 100%)",
      iconColor: "text-yellow-500",
    }
  ];

  // Find active item based on current path
  const currentItem = menuItems.find(item => item.href === location.pathname);
  const activeLabel = currentItem ? currentItem.label : "";

  const handleItemClick = async (label: string, e: React.MouseEvent) => {
    if (label === "Theme") {
      const button = e.currentTarget as HTMLElement;
      
      // @ts-ignore
      if (!document.startViewTransition) {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        return;
      }
      
      const isDark = theme === 'dark';
      
      // @ts-ignore
      await document.startViewTransition(() => {
        flushSync(() => {
          setTheme(isDark ? 'light' : 'dark');
        })
      }).ready;

      const { left, top, width, height } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const maxDistance = Math.hypot(
        Math.max(centerX, window.innerWidth - centerX),
        Math.max(centerY, window.innerHeight - centerY)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${centerX}px ${centerY}px)`,
            `circle(${maxDistance}px at ${centerX}px ${centerY}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
      return;
    }
    const item = menuItems.find(i => i.label === label);
    if (item && item.href) navigate(item.href);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const brandLogo = <Logo />;

  return (
    <div className="fixed top-0 left-0 w-full z-50 hidden md:block">
      <MenuBar 
        className="rounded-none border-t-0 border-x-0 w-full flex justify-between max-w-none px-6 md:px-grid-margin"
        items={menuItems}
        activeItem={activeLabel}
        onItemClick={handleItemClick}
        brand={brandLogo}
      />
    </div>
  );
}

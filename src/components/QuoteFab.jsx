import { Link, useLocation } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuote } from '@/context/QuoteContext';

export default function QuoteFab() {
  const { count } = useQuote();
  const { pathname } = useLocation();

  if (count === 0 || pathname === '/quote') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="fixed z-40 bottom-24 right-4 md:bottom-8 md:right-8"
    >
      <Link
        to="/quote"
        className="relative flex items-center gap-2 rounded-full bg-primary text-on-primary pl-5 pr-6 py-3.5 shadow-raised hover:scale-105 transition-transform font-label-md text-label-md"
      >
        <FileText className="h-5 w-5" />
        <span>View Quote</span>
        <span className="absolute -top-2 -right-2 grid place-items-center h-6 min-w-[1.5rem] px-1.5 rounded-full bg-gold text-on-primary-fixed text-xs font-bold tabular-nums">
          {count}
        </span>
      </Link>
    </motion.div>
  );
}

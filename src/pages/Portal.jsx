import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LogOut, FileText, Package, ArrowRight, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useQuote } from '@/context/QuoteContext';

// Sample order history so the portal feels real. Replace with API data
// once a backend is connected.
const SAMPLE_ORDERS = [
  { ref: 'CV-1042', items: 'Security · 8 items', date: 'May 2026', status: 'Delivered', tone: 'bg-on-tertiary-container/15 text-on-tertiary-container' },
  { ref: 'CV-1067', items: 'Hospitality · 5 items', date: 'Jun 2026', status: 'In production', tone: 'bg-gold/15 text-gold-dim dark:text-gold' },
];

export default function Portal() {
  const { user, signOut } = useAuth();
  const { items } = useQuote();
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" replace />;

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  const firstName = user.email.split('@')[0];

  return (
    <section className="w-full max-w-container-max mx-auto px-grid-margin pt-32 md:pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-gold-dim dark:text-gold mb-3">Client Portal</p>
          <h1 className="font-display-md text-display-md text-primary dark:text-on-primary tracking-tight">Welcome back, {firstName}</h1>
        </div>
        <button onClick={handleSignOut} className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-5 py-2.5 font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors">
          <LogOut className="h-4 w-4" aria-hidden="true" /> Sign out
        </button>
      </div>

      <p className="mb-10 rounded-lg border border-outline-variant bg-surface-container-low p-4 font-body-sm text-body-sm text-on-surface-variant">
        This is a demo portal. Account data is stored only in your browser — connect a backend to enable real orders, invoices and team management.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-grid-gutter items-start">
        {/* Account */}
        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-11 w-11 rounded-full bg-on-primary-fixed text-on-primary"><User className="h-5 w-5" aria-hidden="true" /></span>
            <h2 className="font-headline-md text-lg text-primary dark:text-on-primary">Account</h2>
          </div>
          <dl className="space-y-2 font-body-md text-body-md">
            <div className="flex justify-between gap-4">
              <dt className="text-on-surface-variant">Email</dt>
              <dd className="text-on-surface truncate">{user.email}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-on-surface-variant">Plan</dt>
              <dd className="text-on-surface">Business (demo)</dd>
            </div>
          </dl>
        </div>

        {/* Saved quote */}
        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-11 w-11 rounded-full bg-on-primary-fixed text-on-primary"><FileText className="h-5 w-5" aria-hidden="true" /></span>
            <h2 className="font-headline-md text-lg text-primary dark:text-on-primary">Your saved quote</h2>
          </div>
          {items.length > 0 ? (
            <>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">{items.length} item{items.length > 1 ? 's' : ''} ready to send.</p>
              <Link to="/quote" className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary dark:text-on-primary hover:text-gold-dim dark:hover:text-gold transition-colors">
                Review &amp; send <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </>
          ) : (
            <>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">No items saved yet.</p>
              <Link to="/collections" className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary dark:text-on-primary hover:text-gold-dim dark:hover:text-gold transition-colors">
                Browse industries <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </>
          )}
        </div>

        {/* Orders */}
        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-11 w-11 rounded-full bg-on-primary-fixed text-on-primary"><Package className="h-5 w-5" aria-hidden="true" /></span>
            <h2 className="font-headline-md text-lg text-primary dark:text-on-primary">Recent orders</h2>
          </div>
          <ul className="space-y-3">
            {SAMPLE_ORDERS.map((o) => (
              <li key={o.ref} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-body-md text-body-md text-on-surface truncate">{o.ref}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{o.items} · {o.date}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${o.tone}`}>{o.status}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-body-sm text-body-sm text-on-surface-variant">Sample data</p>
        </div>
      </div>
    </section>
  );
}

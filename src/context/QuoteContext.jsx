/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const QuoteContext = createContext(null);
const STORAGE_KEY = 'cv-quote-items';

const makeId = (slug, item) => `${slug}::${item}`;

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function QuoteProvider({ children }) {
  const [items, setItems] = useState(load);

  // Persist to localStorage so a buyer's selections survive refreshes/sessions.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota/availability errors */
    }
  }, [items]);

  const addItem = (industrySlug, industryTitle, item) => {
    setItems((prev) => {
      const id = makeId(industrySlug, item);
      if (prev.some((i) => i.id === id)) return prev; // already in basket
      return [...prev, { id, industrySlug, industryTitle, item, qty: 1 }];
    });
  };

  const addMany = (industrySlug, industryTitle, itemList) => {
    setItems((prev) => {
      const next = [...prev];
      itemList.forEach((item) => {
        const id = makeId(industrySlug, item);
        if (!next.some((i) => i.id === id)) {
          next.push({ id, industrySlug, industryTitle, item, qty: 1 });
        }
      });
      return next;
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const setQty = (id, qty) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));

  const clear = () => setItems([]);

  const has = (industrySlug, item) => items.some((i) => i.id === makeId(industrySlug, item));

  const count = items.length;

  return (
    <QuoteContext.Provider value={{ items, addItem, addMany, removeItem, setQty, clear, has, count }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used within a QuoteProvider');
  return ctx;
}

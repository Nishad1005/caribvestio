/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthValue {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: Error | null; needsConfirmation: boolean }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const signUp: AuthValue['signUp'] = async (email, password, fullName) => {
    if (!supabase) return { error: new Error('Authentication is not configured.'), needsConfirmation: false };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName ?? '' } },
    });
    // With email confirmation enabled, signUp returns no session until the user confirms.
    return { error: error as Error | null, needsConfirmation: !error && !data.session };
  };

  const signIn: AuthValue['signIn'] = async (email, password) => {
    if (!supabase) return { error: new Error('Authentication is not configured.') };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error as Error | null };
  };

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, isConfigured: !!supabase, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}

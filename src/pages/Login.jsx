import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MailCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const { user, loading, isConfigured, signUp, signIn } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState('signin'); // signin | signup
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | check-email
  const [serverError, setServerError] = useState('');

  // Wait for the session check before deciding; redirect if already signed in.
  if (loading) return <div className="min-h-screen" />;
  if (user) return <Navigate to="/portal" replace />;

  const isSignup = mode === 'signup';

  const validate = () => {
    const next = {};
    if (isSignup && !form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Password is required.';
    else if (form.password.length < 6) next.password = 'Password must be at least 6 characters.';
    return next;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
    if (errors[id]) setErrors((er) => ({ ...er, [id]: undefined }));
    setServerError('');
  };

  const switchMode = (m) => {
    setMode(m);
    setErrors({});
    setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus('submitting');

    if (isSignup) {
      const { error, needsConfirmation } = await signUp(form.email, form.password, form.name);
      if (error) {
        setServerError(error.message);
        setStatus('idle');
        return;
      }
      if (needsConfirmation) {
        setStatus('check-email');
        return;
      }
      navigate('/portal');
    } else {
      const { error } = await signIn(form.email, form.password);
      if (error) {
        setServerError(error.message);
        setStatus('idle');
        return;
      }
      navigate('/portal');
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-lg border bg-surface-bright dark:bg-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md outline-none';

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary-container">
        <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdzgDJKloEZzY1cwTmM702h-qBCNk29TgPXloDqq2STSk8jV7q5toFavVxU8rfm7PQD6pdO7fXLHDCRgIgLzLCV7iNUkIV9_xO1DWbSDkzbJFarSGMuhUti7ATte7_-D-_9HpJ_ZT2G_sXzYuLGyr4nV1keqELgdmnmfUOKxxa4S4zvCvLlaFYfmK52qxKu4JceE_TdwGWtEA4opulZXpI6cWqtXelx9AyTgjeltbcdNRK9AVUCc_bnzvqtiH795bS1-U9bGfFIdz9"
          alt="Professionals in modern corporate setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col justify-end p-12 text-on-primary h-full bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/30 to-transparent">
          <h2 className="font-display-md text-display-md mb-4 text-white">Effortless Excellence.</h2>
          <p className="font-body-lg text-body-lg text-white/90 max-w-md">Access your customized catalog, track orders, and manage your team's uniform program seamlessly.</p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24 bg-surface dark:bg-surface-container-lowest">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-primary dark:text-on-primary mb-2">
              {isSignup ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="font-body-md text-body-md text-secondary">
              {isSignup ? 'Set up access to your CaribVestio portal' : 'Sign in to your CaribVestio portal'}
            </p>
          </div>

          {!isConfigured && (
            <div className="flex items-start gap-3 rounded-lg border border-error/30 bg-error-container/40 p-4">
              <AlertCircle className="h-5 w-5 shrink-0 text-error mt-0.5" aria-hidden="true" />
              <p className="font-body-sm text-body-sm text-on-error-container">
                Accounts aren't connected yet. Add your Supabase keys to <code>.env</code> to enable sign-up and login.
              </p>
            </div>
          )}

          {status === 'check-email' ? (
            <div role="status" className="rounded-lg border border-on-tertiary-container/30 bg-tertiary-fixed/30 p-6 text-center space-y-3">
              <MailCheck className="mx-auto h-8 w-8 text-on-tertiary-container" aria-hidden="true" />
              <h2 className="font-headline-md text-2xl text-primary dark:text-on-primary">Confirm your email</h2>
              <p className="font-body-md text-body-md text-secondary">
                We've sent a confirmation link to <span className="font-semibold">{form.email}</span>. Click it, then sign in.
              </p>
              <button onClick={() => { switchMode('signin'); setStatus('idle'); }} className="font-label-md text-label-md text-primary dark:text-on-primary underline">
                Back to sign in
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {isSignup && (
                <div>
                  <label htmlFor="name" className="block font-label-md text-label-md text-on-surface mb-2">Full Name</label>
                  <input id="name" type="text" value={form.name} onChange={handleChange} aria-invalid={!!errors.name}
                    className={`${inputBase} ${errors.name ? 'border-error focus:ring-error' : 'border-outline-variant'}`} placeholder="Jane Doe" />
                  {errors.name && <p className="mt-1.5 font-body-sm text-body-sm text-error">{errors.name}</p>}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block font-label-md text-label-md text-on-surface mb-2">Work Email</label>
                <input id="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" aria-invalid={!!errors.email}
                  className={`${inputBase} ${errors.email ? 'border-error focus:ring-error' : 'border-outline-variant'}`} placeholder="name@company.com" />
                {errors.email && <p className="mt-1.5 font-body-sm text-body-sm text-error">{errors.email}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block font-label-md text-label-md text-on-surface">Password</label>
                </div>
                <input id="password" type="password" value={form.password} onChange={handleChange}
                  autoComplete={isSignup ? 'new-password' : 'current-password'} aria-invalid={!!errors.password}
                  className={`${inputBase} ${errors.password ? 'border-error focus:ring-error' : 'border-outline-variant'}`} placeholder="••••••••" />
                {errors.password && <p className="mt-1.5 font-body-sm text-body-sm text-error">{errors.password}</p>}
              </div>

              {serverError && (
                <p role="alert" className="flex items-center gap-2 font-body-sm text-body-sm text-error">
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {serverError}
                </p>
              )}

              <button type="submit" disabled={status === 'submitting' || !isConfigured}
                className="w-full bg-primary text-on-primary py-3 px-4 rounded-lg font-label-lg text-label-lg hover:bg-primary/90 transition-all duration-300 shadow-sm active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'submitting' ? 'Please wait…' : isSignup ? 'Create account' : 'Sign in to Portal'}
              </button>
            </form>
          )}

          {status !== 'check-email' && (
            <div className="text-center pt-6 border-t border-outline-variant">
              <p className="font-body-sm text-body-sm text-secondary">
                {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button onClick={() => switchMode(isSignup ? 'signin' : 'signup')} className="font-label-md text-label-md text-primary dark:text-on-primary hover:underline">
                  {isSignup ? 'Sign in' : 'Create one'}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

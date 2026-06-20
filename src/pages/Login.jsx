import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const next = {};
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Password is required.';
    else if (form.password.length < 6) next.password = 'Password must be at least 6 characters.';
    return next;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [id]: type === 'checkbox' ? checked : value }));
    if (errors[id]) setErrors((er) => ({ ...er, [id]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus('submitting');
    // No backend yet — simulate the request so the UX is complete.
    setTimeout(() => setStatus('success'), 800);
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
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Welcome Back</h1>
            <p className="font-body-md text-body-md text-secondary">Sign in to your CaribVestio portal</p>
          </div>

          {status === 'success' ? (
            <div
              role="status"
              className="rounded-lg border border-on-tertiary-container/30 bg-tertiary-fixed/30 p-6 text-center space-y-3"
            >
              <CheckCircle2 className="text-on-tertiary-container h-6 w-6" />
              <h2 className="font-headline-md text-2xl text-primary">You're signed in</h2>
              <p className="font-body-md text-body-md text-secondary">
                Welcome back! This is a demo — connect an auth backend to redirect to your portal.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="email" className="block font-label-md text-label-md text-on-surface mb-2">Work Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`${inputBase} ${errors.email ? 'border-error focus:ring-error' : 'border-outline-variant'}`}
                  placeholder="name@company.com"
                />
                {errors.email && <p id="email-error" className="mt-1.5 font-body-sm text-body-sm text-error">{errors.email}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block font-label-md text-label-md text-on-surface">Password</label>
                  <a href="#" className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors">Forgot password?</a>
                </div>
                <input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  className={`${inputBase} ${errors.password ? 'border-error focus:ring-error' : 'border-outline-variant'}`}
                  placeholder="••••••••"
                />
                {errors.password && <p id="password-error" className="mt-1.5 font-body-sm text-body-sm text-error">{errors.password}</p>}
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={form.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface-bright dark:bg-surface"
                />
                <label htmlFor="remember" className="ml-2 block font-body-sm text-body-sm text-secondary">
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary text-on-primary py-3 px-4 rounded-lg font-label-lg text-label-lg hover:bg-primary/90 transition-all duration-300 shadow-sm active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Signing in…' : 'Sign in to Portal'}
              </button>
            </form>
          )}

          <div className="text-center pt-6 border-t border-outline-variant">
            <p className="font-body-sm text-body-sm text-secondary">
              Don't have an account? <Link to="/contact" className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors">Request access</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

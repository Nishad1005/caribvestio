import { useState } from 'react';
import { MapPin, Phone, Mail, MailCheck, ChevronDown, MessageCircle } from 'lucide-react';

const fieldBase =
  'w-full bg-transparent border-0 border-b rounded-none px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 transition-colors';

export default function ContactUs() {
  const [form, setForm] = useState({
    subject: 'General Enquiry',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.message.trim()) next.message = 'Please tell us about your needs.';
    return next;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
    if (errors[id]) setErrors((er) => ({ ...er, [id]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 800);
  };

  const borderFor = (key) => (errors[key] ? 'border-error focus:border-error' : 'border-outline-variant focus:border-primary');

  return (
    <section className="max-w-container-max mx-auto w-full px-grid-margin pt-32 md:pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">Let's Build Your Team's Identity</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Connect with our corporate styling experts to elevate your brand presence across the Caribbean. We are here to assist with tailored uniform solutions.</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
        {/* Contact Info & Map (Left Column) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Info Card */}
          <div className="bg-surface-container-lowest rounded-xl p-8 soft-shadow flex flex-col gap-6">
            <h2 className="font-headline-md text-headline-md text-primary mb-2">Get in Touch</h2>
            <div className="flex items-start gap-4">
              <MapPin className="text-surface-tint mt-1 h-5 w-5" />
              <div>
                <h3 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Central Office</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">124 Corporate Boulevard<br />Kingston, Jamaica, W.I.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-surface-tint mt-1 h-5 w-5" />
              <div>
                <h3 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Phone &amp; WhatsApp</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">+1 (876) 555-0199</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-surface-tint mt-1 h-5 w-5" />
              <div>
                <h3 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Email</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">corporate@caribvestio.com</p>
              </div>
            </div>
          </div>
          {/* Map Card */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-shadow h-[300px] relative">
            <img alt="Stylized map of the Caribbean marking CaribVestio office locations" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNo7B7BN8LSZjhd7iZzxQKMoDQQ9CVQ7CCY3L-1Dc3dZsbN6hIy1VgKspQ5t3QeBGVMwUOFEOWcpCZtoDWYoVDU7-v7AL9dsfh81gGCUPZfQU8kXPAPzIUWOQUUU39CtLrKq43k0dZvBczf6pvipyRihgcCWG8Y2_MQBlq4qhanoVYmPr2sKHk_U3d6VhYLJY22YmaEDcdXron0s5HTc4RRGIQjBgtHrfRV43OzLkfmfUf9SRMjUA0mI1dQPAkEU91IYG1aZur3e7_" />
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          </div>
        </div>

        {/* Form (Right Column) */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 soft-shadow">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Quick Enquiry</h2>

            {status === 'success' ? (
              <div role="status" className="rounded-lg border border-on-tertiary-container/30 bg-tertiary-fixed/30 p-8 text-center space-y-3">
                <MailCheck className="text-on-tertiary-container h-6 w-6 mx-auto" />
                <h3 className="font-headline-md text-2xl text-primary">Message sent</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Thanks, {form.name.split(' ')[0] || 'there'}! Our team will be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="subject">Subject</label>
                  <div className="relative">
                    <select value={form.subject} onChange={handleChange} className={`${fieldBase} border-outline-variant focus:border-primary appearance-none cursor-pointer`} id="subject">
                      <option>General Enquiry</option>
                      <option>Bulk Order Request</option>
                      <option>Sample Request</option>
                      <option>Custom Fitting Session</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-outline h-5 w-5" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="name">Full Name</label>
                    <input value={form.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={`${fieldBase} ${borderFor('name')}`} id="name" placeholder="Jane Doe" type="text" />
                    {errors.name && <p id="name-error" className="mt-1.5 font-body-sm text-body-sm text-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="company">Company</label>
                    <input value={form.company} onChange={handleChange} className={`${fieldBase} border-outline-variant focus:border-primary`} id="company" placeholder="Acme Corp Ltd." type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="email">Email Address</label>
                    <input value={form.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={`${fieldBase} ${borderFor('email')}`} id="email" placeholder="jane@example.com" type="email" />
                    {errors.email && <p id="email-error" className="mt-1.5 font-body-sm text-body-sm text-error">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                    <input value={form.phone} onChange={handleChange} className={`${fieldBase} border-outline-variant focus:border-primary`} id="phone" placeholder="+1 (___) ___-____" type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="message">Message</label>
                  <textarea value={form.message} onChange={handleChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className={`${fieldBase} ${borderFor('message')} resize-none`} id="message" placeholder="Tell us about your team's needs..." rows="4"></textarea>
                  {errors.message && <p id="message-error" className="mt-1.5 font-body-sm text-body-sm text-error">{errors.message}</p>}
                </div>
                <div className="pt-4">
                  <button disabled={status === 'submitting'} className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-surface-tint transition-all duration-300 w-full md:w-auto uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed" type="submit">
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <a aria-label="Chat with us on WhatsApp" className="fixed bottom-20 md:bottom-8 left-4 md:left-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-40 flex items-center justify-center" href="#">
        <MessageCircle className="h-5 w-5" />
      </a>
    </section>
  );
}

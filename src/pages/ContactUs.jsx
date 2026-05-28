export default function ContactUs() {
  return (
    <>
      
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
<span className="material-symbols-outlined text-surface-tint mt-1">location_on</span>
<div>
<h3 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Central Office</h3>
<p className="font-body-md text-body-md text-on-surface-variant">124 Corporate Boulevard<br/>Kingston, Jamaica, W.I.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-surface-tint mt-1">call</span>
<div>
<h3 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Phone &amp; WhatsApp</h3>
<p className="font-body-md text-body-md text-on-surface-variant">+1 (876) 555-0199</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-surface-tint mt-1">mail</span>
<div>
<h3 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Email</h3>
<p className="font-body-md text-body-md text-on-surface-variant">corporate@caribvestio.com</p>
</div>
</div>
</div>
{/* Map Card */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden soft-shadow h-[300px] relative">
<img alt="Map of Caribbean region" className="w-full h-full object-cover opacity-80" data-alt="A stylized, clean digital map showing the Caribbean islands, focusing on Jamaica, Barbados, and Trinidad. The map uses a minimalist color palette with soft sand tones for landmasses and muted teal for the ocean, aligning with a high-end corporate B2B interface. Subtle glowing pins indicate office locations." data-location="Caribbean" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNo7B7BN8LSZjhd7iZzxQKMoDQQ9CVQ7CCY3L-1Dc3dZsbN6hIy1VgKspQ5t3QeBGVMwUOFEOWcpCZtoDWYoVDU7-v7AL9dsfh81gGCUPZfQU8kXPAPzIUWOQUUU39CtLrKq43k0dZvBczf6pvipyRihgcCWG8Y2_MQBlq4qhanoVYmPr2sKHk_U3d6VhYLJY22YmaEDcdXron0s5HTc4RRGIQjBgtHrfRV43OzLkfmfUf9SRMjUA0mI1dQPAkEU91IYG1aZur3e7_"/>
<div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
</div>
</div>
{/* Form (Right Column) */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 soft-shadow">
<h2 className="font-headline-md text-headline-md text-primary mb-8">Quick Enquiry</h2>
<form className="space-y-8">
<div>
<label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="subject">Subject</label>
<div className="relative">
<select className="w-full appearance-none bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-3 font-body-md text-body-md text-on-surface focus:ring-0 focus:border-primary transition-colors cursor-pointer" id="subject">
<option>General Enquiry</option>
<option>Bulk Order Request</option>
<option>Sample Request</option>
<option>Custom Fitting Session</option>
</select>
<span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="name">Full Name</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary transition-colors" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="company">Company</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary transition-colors" id="company" placeholder="Acme Corp Ltd." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="email">Email Address</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary transition-colors" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary transition-colors" id="phone" placeholder="+1 (___) ___-____" type="tel"/>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2 uppercase tracking-wider" htmlFor="message">Message</label>
<textarea className="w-full bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary transition-colors resize-none" id="message" placeholder="Tell us about your team's needs..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-surface-tint transition-all duration-300 w-full md:w-auto uppercase tracking-wider" type="button">Send Message</button>
</div>
</form>
</div>
</div>
</div>

<a className="fixed bottom-20 md:bottom-8 right-4 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-40 flex items-center justify-center" href="#">
<span className="material-symbols-outlined" style={{}} /* Fix manually if needed */>chat</span>
</a>
    </>
  );
}
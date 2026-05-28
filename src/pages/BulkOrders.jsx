export default function BulkOrders() {
  return (
    <>
      
{/* Hero Section */}
<section className="relative w-full min-h-[819px] flex items-center justify-center px-grid-margin py-section-gap-mobile md:py-section-gap-desktop bg-on-primary-fixed text-on-primary overflow-hidden">
{/* Background Image */}
<div className="absolute inset-0 z-0 opacity-40">
<img alt="Team in uniforms" className="w-full h-full object-cover object-center" data-alt="A wide, high-quality photograph of a diverse team of professionals in a modern, sunlit Caribbean office setting, all wearing cohesive, stylish corporate uniforms in neutral and deep navy tones. The atmosphere is professional, warm, and collaborative. The lighting is natural and bright, emphasizing a high-end editorial aesthetic suitable for a premium B2B brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_cqzU4g2XYA80zM8t9mMjZG3z12iaV3Kvv0e99GXutGny0t7N_hhKut546EldVn-RWgVBUt9rVK1KsETXL7it1Nnbl9HLhHQhkm4t7QujkqzJzDvCsigFvG_z6D_pNbHN1cs9T4obA8KqxFbMtSB5a2A7dmw1u9xuE_aupkqFyx5Gf1u9QsImHB0k3jTQCAuACfk7idJv3-USMEYWJSeRHAc2zxE11iO6gBneLdt3br8FjozAhiCWMeBaGCC4nxgkJCwOYvujlDvn"/>
</div>
<div className="relative z-10 max-w-container-max mx-auto flex flex-col items-center text-center px-4">
<span className="font-label-md text-label-md text-secondary-fixed tracking-widest uppercase mb-4">CaribVestio Corporate</span>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl">Bulk Uniform Orders Made Simple.</h1>
<p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mb-10">Premium, cohesive attire for Caribbean resorts, clinics, and corporate enterprises. Streamlined customization, reliable regional delivery.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-tint transition-colors duration-300 inline-flex items-center justify-center gap-2" href="#quote-form">
                        Get Bulk Quote
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="bg-transparent border border-on-primary text-on-primary px-8 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-variant hover:text-primary transition-colors duration-300 inline-flex items-center justify-center" href="#process">
                        View Process
                    </a>
</div>
</div>
</section>
{/* Form Section */}
<section className="py-section-gap-mobile md:py-section-gap-desktop px-grid-margin bg-surface" id="quote-form">
<div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-xl soft-shadow">
<div className="text-center mb-10">
<h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-4">Request a Bulk Quote</h2>
<p className="font-body-md text-body-md text-surface-tint">Provide your details below, and our corporate team will respond within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block font-label-md text-label-md text-primary mb-2">Full Name</label>
<input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md transition-colors" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2">Company Name</label>
<input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md transition-colors" placeholder="Acme Resort &amp; Spa" type="text"/>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2">Email Address</label>
<input className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md transition-colors" placeholder="jane@company.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block font-label-md text-label-md text-primary mb-2">Product Type</label>
<select className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md text-surface-tint">
<option>Select Product Type</option>
<option>Corporate Suiting</option>
<option>Resort Wear</option>
<option>Medical Scrubs</option>
</select>
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-2">Estimated Quantity</label>
<select className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md text-surface-tint">
<option>Select Quantity Range</option>
<option>20 - 50</option>
<option>51 - 200</option>
<option>200+</option>
</select>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-primary-container text-on-primary py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-tint transition-colors duration-300" type="submit">Submit Request</button>
</div>
</form>
</div>
</section>

    </>
  );
}
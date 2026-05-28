export default function ShopCollections() {
  return (
    <>
      
{/* Hero Section */}
<section className="mb-section-gap-mobile md:mb-section-gap-desktop text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2 space-y-6">
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">Collections for Every Industry</h1>
<p className="font-body-lg text-body-lg text-secondary md:max-w-xl">Curated professional attire designed for the modern Caribbean corporate landscape. Effortless excellence for every team.</p>
</div>
<div className="md:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden relative shadow-[0px_20px_40px_rgba(15,23,42,0.05)]">
<img alt="Corporate Team" className="w-full h-full object-cover" data-alt="A diverse team of professionals walking confidently through a bright, modern Caribbean office lobby. They are wearing sleek, tailored corporate uniforms in deep navy and warm sand tones. The lighting is soft and natural, pouring in from large glass windows, creating a high-end fashion editorial mood within a B2B SaaS aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjRxFkoAfsuScEhieGM-NpGQPmkydDVR-BJTjs2pJamwF7mOhGH0fuX05CB7fDVfC5w5ikOPoYg54WScv5EzbACiwViaRAo6AnfSIVeD0ST8ba2qbTlRNlqfZ3V-U8ditgwAJVKIPIdmfMuVlDKxwjUPWb7zZX7LRIxGlrn8LW3LynJw25U4YnkpOb-Lt3nxqBo6oJXyMmUH7e_R_0nssU5RH4FF9veNMTrqw_1iqbV1iFBlrgKfNxO6zwG48JYtYHkcpZNx4g0cVm"/>
<div className="absolute inset-0 bg-primary-container/20"></div>
</div>
</section>
{/* Main Layout: Sidebar + Grid */}
<div className="flex flex-col md:flex-row gap-grid-gutter">
{/* Filter Sidebar */}
<aside className="md:w-1/4 w-full mb-8 md:mb-0 space-y-8">
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_20px_40px_rgba(15,23,42,0.05)] border border-surface-variant">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-primary text-[24px]">Filters</h3>
<span className="material-symbols-outlined text-secondary cursor-pointer" data-icon="tune">tune</span>
</div>
{/* Category Filter */}
<div className="mb-6">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-3 uppercase tracking-wider">Industry</h4>
<div className="space-y-2">
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-5 w-5 text-primary-container border-outline-variant rounded focus:ring-primary-container bg-surface-bright" type="checkbox"/>
<span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Hospitality</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input checked="" className="form-checkbox h-5 w-5 text-primary-container border-outline-variant rounded focus:ring-primary-container bg-surface-bright" type="checkbox"/>
<span className="font-body-md text-body-md text-primary font-semibold">Corporate Finance</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-5 w-5 text-primary-container border-outline-variant rounded focus:ring-primary-container bg-surface-bright" type="checkbox"/>
<span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Healthcare</span>
</label>
</div>
</div>
{/* Material Filter */}
<div className="mb-6">
<h4 className="font-label-md text-label-md text-on-surface-variant mb-3 uppercase tracking-wider">Material</h4>
<div className="space-y-2">
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-5 w-5 text-primary-container border-outline-variant rounded focus:ring-primary-container bg-surface-bright" type="checkbox"/>
<span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Tropical Wool</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-5 w-5 text-primary-container border-outline-variant rounded focus:ring-primary-container bg-surface-bright" type="checkbox"/>
<span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Breathable Cotton</span>
</label>
</div>
</div>
</div>
</aside>
{/* Product Grid Area */}
<div className="md:w-3/4 w-full">
{/* Banners Area (Bento-ish) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter mb-section-gap-mobile">
{/* Resort Wear Banner */}
<div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-[0px_20px_40px_rgba(15,23,42,0.05)]">
<img alt="Resort Wear" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up of premium, lightweight linen resort wear uniforms in soft sand and off-white colors, hanging elegantly in a sunlit boutique setting. The lighting is warm and inviting, highlighting the breathable texture of the fabric. The overall mood is sophisticated, relaxed, and perfectly aligned with a high-end Caribbean hospitality aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9_3vlT4d7wbS8YMgmOShIXs9ngRQg089sDm46EFeJj_e0M1cWrDBvkV8Rgq-1LsZNxJM2hKeyCkZfhkXZBj8F8F2qfywUArpwS1xzXZ5Rf0nxWIq6iADdtwlOiQccDTMks4DwYb8lXkzkv1k9UcvJfsjqeCSp85WHG4vI6poxv8NTOTDrVrhMDLiLfZOxroBzbhcFJLoaX3xZI1neOebkYvRiocBMhl15qNd3axZSogPzsmIkwgdhFinJqwpUyJumP0ql01JleZrt"/>
<div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/50 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<h3 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-primary mb-2">Resort Wear</h3>
<p className="font-body-md text-body-md text-surface-container-high">Breeze through elegance.</p>
</div>
<span className="material-symbols-outlined text-on-primary bg-on-primary-fixed/50 backdrop-blur-md p-3 rounded-full group-hover:bg-on-primary-fixed transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
{/* Safety Banner */}
<div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-[0px_20px_40px_rgba(15,23,42,0.05)]">
<img alt="Safety Attire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A modern industrial workspace where professionals are wearing sleek, tailored high-visibility safety attire that looks more like designer streetwear than standard safety gear. The garments feature deep navy bases with subtle, reflective accents. The environment is clean, bright, and highly professional, showcasing safety without compromising on premium style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb60gtaTNUAIaxvh89oOSq1QUSQR_VUfOn4Fea_KD8vdN0jUhCrUwjzBUV9UsyZmWr_0FkscanDRgRvw4MTcWPjuomvj6dUVF52XBweFFCKgJuGs8TCtXuoIC4p9RkBSzuEpzrfdtIwvJBGdvy-SYhjlZ4TT5LrqLIAqKeY3tnmVHNKUnQOGKjETgGwH6xn-lqUBxRqWpJXn7wWk7kH6p3Vt0-lkcwC4cea8XI6ba63KWJKYLNrBgEXo5hvy5QYTdrcuV4DAMmuy3T"/>
<div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/50 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<h3 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-primary mb-2">Safety First</h3>
<p className="font-body-md text-body-md text-surface-container-high">Protection meets prestige.</p>
</div>
<span className="material-symbols-outlined text-on-primary bg-on-primary-fixed/50 backdrop-blur-md p-3 rounded-full group-hover:bg-on-primary-fixed transition-colors" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
{/* Product Grid */}
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline-md text-headline-md text-primary">Corporate Finance</h2>
<span className="font-body-md text-body-md text-secondary">24 Items</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
{/* Product Card 1 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(15,23,42,0.05)] group border border-transparent hover:border-surface-variant transition-colors duration-300 flex flex-col">
<div className="relative aspect-[4/5] overflow-hidden bg-surface">
<img alt="Executive Suit" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" data-alt="A sharp, perfectly tailored deep navy executive suit displayed on a minimalist wooden mannequin against a pristine white studio background. The lighting is crisp and even, highlighting the fine texture of the tropical wool fabric. The style is modern B2B minimalist, conveying ultimate professional reliability and high-end elegance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-oKgseW_OgiRfvfCrOA_7V2XrMRQKOlvGbuz-ZBuHvZNITH_IioMs4UoBxk6P_4Oo_t4O1QP-BkHQmAFVEeaUsguO-r466ZCCm-mXDdA2v88ebrpNRezuEvER_a2zvw5T1nrqzVt49Fnj8YqaCdG0RyLwWR2lIIWs-WfMagRl6VfwmIuFq-6Fdda-i6SqDpy1dScLDHScfvgVfikRSX4eAD4mnrSuEYTsTXpuWbRVdPT6qFMzjyK4Dd-8As-XOs5EK_tndfTZ_hMq"/>
<div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<span className="material-symbols-outlined text-primary" data-icon="favorite_border">favorite_border</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-headline-md text-headline-md text-[20px] text-primary mb-1">The Executive Suite</h3>
<p className="font-body-md text-body-md text-secondary mb-4 flex-grow">Lightweight tropical wool blend, ideal for climate-controlled environments.</p>
<div className="flex items-center justify-between mt-auto">
<button className="font-label-md text-label-md text-primary border-b border-primary pb-1 hover:text-on-primary-fixed-variant transition-colors">View Details</button>
<button className="bg-primary-container text-on-primary font-label-md text-label-md py-2 px-4 rounded-lg hover:bg-surface-tint transition-colors duration-300">Quote</button>
</div>
</div>
</div>
{/* Product Card 2 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(15,23,42,0.05)] group border border-transparent hover:border-surface-variant transition-colors duration-300 flex flex-col">
<div className="relative aspect-[4/5] overflow-hidden bg-surface">
<img alt="Classic Blouse" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" data-alt="A crisp, white, modern corporate blouse with clean architectural lines, styled on a hanger against a warm sand-colored background. The fabric appears soft yet structured. The composition is spacious and minimalist, emphasizing the 'Effortless Excellence' brand feeling through high-end editorial lighting and shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw5vY09toiYH792hNX7_F0VTNMrjW1KU_nXTR70vNeX-UgBl6q7F9qPysJ0dpkKv65R6Q5LcBj3q8x_iMEn1LNMf8wBGEVZyjLS878EZg0JQpFMns0tBkI556waXwpqZQvHhxOoY5E8vI6NUdBco3hbU6zync8vjz-OaYJztZYuPCQlbRjU6NIlj7UAj4J_PuSzCqsA2da7s-WBnhWAhoFSmPGhF-OYbUVAysRsfUyZcnccY1-jtS3Kn5fEqYZ2Zwyq9QJmLv3xIZQ"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-headline-md text-headline-md text-[20px] text-primary mb-1">Signature Blouse</h3>
<p className="font-body-md text-body-md text-secondary mb-4 flex-grow">Wrinkle-resistant poplin with a tailored modern fit.</p>
<div className="flex items-center justify-between mt-auto">
<button className="font-label-md text-label-md text-primary border-b border-primary pb-1 hover:text-on-primary-fixed-variant transition-colors">View Details</button>
<button className="bg-primary-container text-on-primary font-label-md text-label-md py-2 px-4 rounded-lg hover:bg-surface-tint transition-colors duration-300">Quote</button>
</div>
</div>
</div>
{/* Product Card 3 */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(15,23,42,0.05)] group border border-transparent hover:border-surface-variant transition-colors duration-300 flex flex-col">
<div className="relative aspect-[4/5] overflow-hidden bg-surface">
<img alt="Modern Blazer" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" data-alt="A close-up of a modern, unstructured blazer in a muted teal color, resting on a clean, light-colored wooden surface. The focus is on the premium stitching and subtle texture of the fabric. The image exudes a contemporary B2B professionalism with a touch of relaxed Caribbean warmth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-mkNYHRL6lyPOAtagEU39AUkVOBqpmaL76LRW13ocHqLa_LPXfdN7rsZe0As8SkQQ5c2_vjeig6m4NGhL0im6NP_qmqwyxruDd0t-o6XUGR7hjFzZnj3ZCAzfU12ks1kK0Sc8HjMPQvjkmc0plO9Wco8ZLvtqFRX_LW8yJBXg_F62B-9omXtWpHJIaqioIngFlvXEkngpfkWPM6hmMIPwsmA5sK46pY2nAOnsnKBahTwtW5wHNd_ozaWNTJgN4nOI6l_378v6vpFA"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-headline-md text-headline-md text-[20px] text-primary mb-1">Agile Blazer</h3>
<p className="font-body-md text-body-md text-secondary mb-4 flex-grow">Unstructured design for freedom of movement and elevated style.</p>
<div className="flex items-center justify-between mt-auto">
<button className="font-label-md text-label-md text-primary border-b border-primary pb-1 hover:text-on-primary-fixed-variant transition-colors">View Details</button>
<button className="bg-primary-container text-on-primary font-label-md text-label-md py-2 px-4 rounded-lg hover:bg-surface-tint transition-colors duration-300">Quote</button>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
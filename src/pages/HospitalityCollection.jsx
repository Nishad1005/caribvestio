export default function HospitalityCollection() {
  return (
    <>
      
{/* Category Header (Editorial Lifestyle Banner) */}
<section className="relative w-full h-[614px] min-h-[400px] flex items-end justify-start bg-on-primary-fixed overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-multiply" data-alt="A luxurious Caribbean resort setting featuring professional staff in impeccably tailored, modern minimal uniforms. The scene is bathed in warm, natural tropical sunlight creating a bright, welcoming light-mode aesthetic. The staff uniforms utilize a sophisticated palette of crisp whites, soft sands, and deep navy accents, reflecting effortless excellence. The mood is highly professional yet inviting, set against a backdrop of clean architectural lines and subtle tropical greenery." style={{}} /* Fix manually if needed */>
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto px-grid-margin pb-section-gap-mobile md:pb-16">
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-4 max-w-3xl">
                    Hospitality &amp; Resort Uniforms
                </h1>
<p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl">
                    Elevate your guest experience with attire that blends high-end editorial aesthetics with the practical demands of luxury resort environments.
                </p>
</div>
</section>
{/* Sub-navigation & Filters */}
<section className="sticky top-[80px] z-40 bg-background/90 backdrop-blur-md border-b border-surface-dim py-4">
<div className="max-w-container-max mx-auto px-grid-margin flex flex-col md:flex-row justify-between items-center gap-4">
{/* Sub-categories (Pills) */}
<div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap">All Roles</button>
<button className="px-6 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary transition-colors font-label-md text-label-md whitespace-nowrap">Front Desk</button>
<button className="px-6 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary transition-colors font-label-md text-label-md whitespace-nowrap">Housekeeping</button>
<button className="px-6 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary transition-colors font-label-md text-label-md whitespace-nowrap">Spa</button>
<button className="px-6 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary transition-colors font-label-md text-label-md whitespace-nowrap">Food &amp; Beverage</button>
</div>
{/* Refined Filters */}
<div className="flex gap-4 w-full md:w-auto justify-end">
<div className="relative group">
<button className="flex items-center gap-2 text-primary font-label-md text-label-md hover:opacity-80">
                            Fabric Type <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 text-primary font-label-md text-label-md hover:opacity-80">
                            Style <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
</div>
</div>
</section>
{/* Product Bento Grid */}
<section className="max-w-container-max mx-auto px-grid-margin py-section-gap-mobile md:py-section-gap-desktop">
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter auto-rows-[300px] md:auto-rows-[400px]">
{/* Feature Card 1 (Large) */}
<div className="md:col-span-8 row-span-1 relative group overflow-hidden rounded-lg bg-surface-container-low flex items-end">
<img alt="Resort staff member" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A portrait of a male hotel concierge standing in a sunlit, modern resort lobby. He is wearing a sharply tailored, breathable tropical wool blazer in a deep navy color, paired with a crisp white shirt. The lighting highlights the premium texture of the fabric and the clean, structural lines of the garment. The background features minimalist, warm-toned architecture consistent with high-end Caribbean hospitality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCEACQcNGamjZzTB9M_LTXq5H48O16N4qxXCqsV_FdqKQ834HOgdYdR6U9cwhhCvG3-uuugGCoSRYkTS5Wvx6elRsHqrxj5OzS1KmfOqFO2xKVGq3ZpIZ8P9IzI9rQJgbXUIm2AYa7jOvngho27dBidLMuU58PMFEPihFLB40bhTytZHl3KmTTBN0UE85BUszY623GVQqVuUgr3F4L2DmtqQYD6AcVt4IojOwzrjszP3Fs_nv-OgRl6ZYP6_m0Iuquljx8bM8-9jF"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/80 via-transparent to-transparent"></div>
<div className="relative z-10 p-8 w-full">
<span className="inline-block px-3 py-1 bg-surface/20 backdrop-blur-md rounded-full text-on-primary font-label-md text-label-md mb-3 border border-on-primary/20">Front Desk</span>
<h3 className="font-headline-md text-headline-md text-on-primary mb-1">The Azure Blazer</h3>
<p className="font-body-md text-body-md text-on-primary/80">Breathable Tropical Wool</p>
</div>
</div>
{/* Feature Card 2 (Small) */}
<div className="md:col-span-4 row-span-1 bg-surface-container-lowest rounded-lg p-6 shadow-[0px_20px_40px_rgba(15,23,42,0.05)] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
<div className="w-full h-48 bg-surface-container rounded mb-4 overflow-hidden">
<img alt="Apron detail" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="Close-up detail shot of a premium, minimalist barista apron designed for luxury resort food and beverage service. The apron is crafted from durable, sand-colored canvas with subtly contrasting off-white stitching and high-quality matte metallic hardware. The lighting is bright and clean, emphasizing the functional yet elegant design tailored for professional environments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgxAsimUANvntkWTPQJmn2G34SURwguVWbpSzjy2d1KVovlmh5HAOtEAImep2B0zqZKuBXKut82nEOorgNHbI7d56VRwnfqmOC5Mgpuu8wS7ce1AHn6l1MiniO2jv2_6exDVXnOP3VZCtAfCTYvRkiMWiqlEKpPpKB7wLXEutBHxoDA9lfqO8ZDekgFl3CTP1QWS7I6TtUHvnO7xFlr7Z1iENBAmRZtWLXlBI0ZQYi5i0mdKk55UyMHswnzNkpayeLG3Nx7dXhNQtP"/>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-body-lg text-body-lg text-primary font-semibold">Canvas Crossback Apron</h3>
<span className="material-symbols-outlined text-outline">arrow_outward</span>
</div>
<p className="font-body-md text-body-md text-secondary">Food &amp; Beverage • Heavy Cotton</p>
</div>
</div>
{/* Feature Card 3 (Small) */}
<div className="md:col-span-4 row-span-1 bg-surface-container-lowest rounded-lg p-6 shadow-[0px_20px_40px_rgba(15,23,42,0.05)] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
<div className="w-full h-48 bg-surface-container rounded mb-4 overflow-hidden">
<img alt="Spa tunic" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A serene image showcasing a modern spa therapist tunic displayed on a minimalist wooden hanger against a clean, off-white textured wall. The tunic is a light, ethereal sage green, featuring an asymmetric neckline and crafted from ultra-breathable, flowing linen. Soft, diffused daylight emphasizes the garment's relaxed fit and premium, calming aesthetic suitable for high-end wellness centers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgrV9MD-ay9g0qp1TncGEhRl1dWCifHdqtoSC5yv8iXDV0u5Lbu55rz5rySCnBiAit8zWsQjv3pWcoypuilgLNKLGu1HyVFs0ZFK5L3SCX14PaW0Ousx7kKRHmuXd2iZ_wa7qbNKLANf9zdhNijy7sv3fZt3VZbFK0BklyESV-DYNRp5lhg30fpKfO0eCwJxcb3ojlj5-2q5YZHRMQ09V2MrvYmzkr697plIom_tFENiyj2zFjwZIRuGnCgh7tCWEfHhxrZWatMCSE"/>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-body-lg text-body-lg text-primary font-semibold">Tranquil Wrap Tunic</h3>
<span className="material-symbols-outlined text-outline">arrow_outward</span>
</div>
<p className="font-body-md text-body-md text-secondary">Spa • Bamboo Linen Blend</p>
</div>
</div>
{/* Feature Card 4 (Medium wide) */}
<div className="md:col-span-8 row-span-1 relative group overflow-hidden rounded-lg bg-surface-container-low flex items-end">
<img alt="Housekeeping staff" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" data-alt="Two professional housekeeping staff members walking down a sunlit, elegant hotel corridor. They are wearing modern, impeccably fitted utility tunics in a soft, sandy beige tone paired with tailored navy trousers. The uniforms convey an image of clean efficiency and subtle luxury, avoiding traditional cliches. The architectural setting features warm woods and soft white walls." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArHhZnGaqTAA4tMxvDVAKAkS6yDTw7tIfVeMvAAdHPgoD6aueUMnx-aRKHRAYjKephfQSRvSHYpaJNjZwzKojse57G_LhfhAAx1MXb5u5Qi4_kmphQvOP8PUWMAVObsJilu7YEhv4IHYhsVCaVVbsS1aaOVE9eEJlhXBiHjSJu1Aap36p9APSuzzoaCjX9ILNZfSmOvokL6-Mmt7EtF11yVpAc7NR4rG8qYXR_0tWd2CH7zT0YbYuMr7EHdttm52FyYU2ikEhuwQIi"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/20 to-transparent"></div>
<div className="relative z-10 p-8 w-full">
<span className="inline-block px-3 py-1 bg-surface/20 backdrop-blur-md rounded-full text-on-primary font-label-md text-label-md mb-3 border border-on-primary/20">Housekeeping</span>
<h3 className="font-headline-md text-headline-md text-on-primary mb-1">The Utility Collection</h3>
<p className="font-body-md text-body-md text-on-primary/80">Stain-resistant, high-mobility fabrics engineered for elegance in motion.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
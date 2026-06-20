import { SlidersHorizontal, ArrowRight, Heart, BadgeCheck, Droplets } from 'lucide-react';

export default function ShopCollections() {
  return (
    <>
      {/* Hero Section from IndustriesServed (it's more impressive) */}
      <section className="relative w-full min-h-[716px] flex items-center justify-center px-grid-margin overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Professionals in tailored uniforms in a modern Caribbean corporate lobby" className="w-full h-full object-cover object-center" data-alt="A wide, sweeping shot of a diverse group of professionals standing in a bright, modern corporate lobby with lush indoor tropical plants. They are wearing sharp, tailored uniforms in deep navy and crisp white, embodying a high-end B2B catalog aesthetic. Sunlight streams through large glass windows, creating a warm, inviting, and trustworthy atmosphere typical of a premium Caribbean corporate setting. The mood is effortless excellence and professional reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdzgDJKloEZzY1cwTmM702h-qBCNk29TgPXloDqq2STSk8jV7q5toFavVxU8rfm7PQD6pdO7fXLHDCRgIgLzLCV7iNUkIV9_xO1DWbSDkzbJFarSGMuhUti7ATte7_-D-_9HpJ_ZT2G_sXzYuLGyr4nV1keqELgdmnmfUOKxxa4S4zvCvLlaFYfmK52qxKu4JceE_TdwGWtEA4opulZXpI6cWqtXelx9AyTgjeltbcdNRK9AVUCc_bnzvqtiH795bS1-U9bGfFIdz9"/>
          <div className="absolute inset-0 bg-on-primary-fixed/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-section-gap-mobile md:pt-0">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary mb-6 drop-shadow-lg">
            Collections for Every Industry
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto drop-shadow-md">
            Curated professional attire designed for the modern Caribbean corporate landscape. Effortless excellence for every team.
          </p>
        </div>
      </section>

      {/* Industry Grid from IndustriesServed */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-grid-margin max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
          {/* Card 1: Hotels & Resorts */}
          <div className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-surface cursor-pointer ambient-shadow">
            <img alt="Hotel concierge in a tailored uniform at a reception desk" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A smiling hotel concierge in a sleek, tailored sand-colored blazer and crisp white shirt standing behind a polished mahogany reception desk." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-8I1fxQYkgcCkosujkGJqpUUpOk4h_o9GuSRHFnDAWJNZDewcFI7VLOv91uZ8JqXTqKHgw7PmNRWMg0ZfOguJElHaXYqVhQ2mKoaLKbbq6FJ1j4LjnAAUYeN3jLy7zGU8eQ3aZPPZ2Ln5CLPVnvbYKpIIIylci0LnZ353vNi78uFOf-Pv6r1jonZGvZ8CDTZOmlH1d52ANlRhdhM9rmdKKxlWEfP-nT8znnySnFrlG1QXDrEFq7HWOUZIvSQ8s0Cw9OywOCkrelet"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform transition-transform duration-300">
              <h3 className="font-headline-md text-headline-md text-on-primary mb-4">Hotels &amp; Resorts</h3>
              <button className="bg-transparent border border-on-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-on-primary hover:text-on-primary-fixed transition-all duration-300 w-max">
                View Industry Solutions
              </button>
            </div>
          </div>
          {/* Card 2: Restaurants & Cafes */}
          <div className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-surface cursor-pointer ambient-shadow">
            <img alt="Chef in a pristine modern white chef's coat" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A confident chef wearing a pristine, modern white chef's coat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD54-Z6YrG4AKtcW8-DD986nkJShgBrFMKnAnSeLokDtHU5rSyf1Vc-uUzhC9PkpuD1BCsct5WJqkbSw2Om4kugDW2syl-EJCqsnmPBUpa7nbnHuE-qalcRA1GCLtw7G_uDWK7-DeHaZPbd7UzYS-sDyrEiYjHeoQEzFkkl1ZUINlFMtX6PxBV0vB9wQNeJ4-6zhZe2D_S16gu1GCjMUWKT_OqTMq89MCl9EzeLx8pCPWJGJil_tgCZCv5lrFnyJcNeERS7UljSWV32"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform transition-transform duration-300">
              <h3 className="font-headline-md text-headline-md text-on-primary mb-4">Restaurants &amp; Cafes</h3>
              <button className="bg-transparent border border-on-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-on-primary hover:text-on-primary-fixed transition-all duration-300 w-max">
                View Industry Solutions
              </button>
            </div>
          </div>
          {/* Card 3: Healthcare & Clinics */}
          <div className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-surface cursor-pointer ambient-shadow">
            <img alt="Two medical professionals walking down a bright hospital corridor" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Two medical professionals walking down a spotless, brightly lit hospital corridor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWvR90I-GJ-VnDs_oQGPZv4DR6LkwuzxJCs_H3exk9OluY2ZBFitMFFBHUyqCHTP9ZaJlzeaAt3WuhIBKK3JJVI9vfxH9tvLkDEuWP1mZCtd8Dorahh7Z6AmNHqhtJtQinYgzAe-jrVLbjHSu1Y_l5oFSLevlaR26nqIvofsMrv2Zae7RaZubJOqQPssUZgSxUIArpDxtbiby209oCnIRUzCdeiCCwn-Xv4eSoypO_0p8aRi5YLuhv4EPucendBdlE65wtfrAUHUpU"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform transition-transform duration-300">
              <h3 className="font-headline-md text-headline-md text-on-primary mb-4">Healthcare &amp; Clinics</h3>
              <button className="bg-transparent border border-on-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-on-primary hover:text-on-primary-fixed transition-all duration-300 w-max">
                View Industry Solutions
              </button>
            </div>
          </div>
          {/* Card 4: Industrial & Safety */}
          <div className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-surface cursor-pointer ambient-shadow">
            <img alt="Industrial project manager in high-visibility workwear on a construction site" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An industrial project manager standing on a clean, modern construction site, wearing high-visibility workwear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO-2yRoqaBVYVtnzd7R0v9W_EYBJ5YTjlOfHlVVIaBUi8qByY9Mbjd96bAqJdVBh-2__uk3GHwGpf2oTNoo-WeKVuGBRRHge2yAjWqrg0tnANuaxpc3sgCe7CuBavZCBlF0_Y9d4n7mhk90bNKkUWWKk44B16yA18DSvWbqLVbmJteXwjq2xDo8ErKsHeCEDhE2pXofWON-LoGKz2GrhxVJuD_xUyWgtVhSsdVwyHXkVZ_blcqJRxJrbSYSEdESgjuQFULerg5-qBT"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform transition-transform duration-300">
              <h3 className="font-headline-md text-headline-md text-on-primary mb-4">Industrial &amp; Safety</h3>
              <button className="bg-transparent border border-on-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-on-primary hover:text-on-primary-fixed transition-all duration-300 w-max">
                View Industry Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: Sidebar + Grid (from ShopCollections) */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-grid-margin max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-grid-gutter">
          {/* Filter Sidebar */}
          <aside className="md:w-1/4 w-full mb-8 md:mb-0 space-y-8">
            <div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow border border-surface-variant">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-primary text-[24px]">Filters</h3>
                <SlidersHorizontal className="text-secondary cursor-pointer h-5 w-5" />
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
                    <input checked={true} readOnly className="form-checkbox h-5 w-5 text-primary-container border-outline-variant rounded focus:ring-primary-container bg-surface-bright" type="checkbox"/>
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
              <div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer ambient-shadow">
                <img alt="Resort Wear" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9_3vlT4d7wbS8YMgmOShIXs9ngRQg089sDm46EFeJj_e0M1cWrDBvkV8Rgq-1LsZNxJM2hKeyCkZfhkXZBj8F8F2qfywUArpwS1xzXZ5Rf0nxWIq6iADdtwlOiQccDTMks4DwYb8lXkzkv1k9UcvJfsjqeCSp85WHG4vI6poxv8NTOTDrVrhMDLiLfZOxroBzbhcFJLoaX3xZI1neOebkYvRiocBMhl15qNd3axZSogPzsmIkwgdhFinJqwpUyJumP0ql01JleZrt"/>
                <div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/50 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <div>
                    <h3 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-primary mb-2">Resort Wear</h3>
                    <p className="font-body-md text-body-md text-surface-container-high">Breeze through elegance.</p>
                  </div>
                  <ArrowRight className="text-on-primary bg-on-primary-fixed/50 backdrop-blur-md p-3 rounded-full group-hover:bg-on-primary-fixed transition-colors h-6 w-6" />
                </div>
              </div>
              {/* Safety Banner */}
              <div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer ambient-shadow">
                <img alt="Safety Attire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb60gtaTNUAIaxvh89oOSq1QUSQR_VUfOn4Fea_KD8vdN0jUhCrUwjzBUV9UsyZmWr_0FkscanDRgRvw4MTcWPjuomvj6dUVF52XBweFFCKgJuGs8TCtXuoIC4p9RkBSzuEpzrfdtIwvJBGdvy-SYhjlZ4TT5LrqLIAqKeY3tnmVHNKUnQOGKjETgGwH6xn-lqUBxRqWpJXn7wWk7kH6p3Vt0-lkcwC4cea8XI6ba63KWJKYLNrBgEXo5hvy5QYTdrcuV4DAMmuy3T"/>
                <div className="absolute inset-0 bg-primary-container/40 group-hover:bg-primary-container/50 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <div>
                    <h3 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-primary mb-2">Safety First</h3>
                    <p className="font-body-md text-body-md text-surface-container-high">Protection meets prestige.</p>
                  </div>
                  <ArrowRight className="text-on-primary bg-on-primary-fixed/50 backdrop-blur-md p-3 rounded-full group-hover:bg-on-primary-fixed transition-colors h-6 w-6" />
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
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow group border border-transparent hover:border-surface-variant transition-colors duration-300 flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <img alt="Executive Suit" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-oKgseW_OgiRfvfCrOA_7V2XrMRQKOlvGbuz-ZBuHvZNITH_IioMs4UoBxk6P_4Oo_t4O1QP-BkHQmAFVEeaUsguO-r466ZCCm-mXDdA2v88ebrpNRezuEvER_a2zvw5T1nrqzVt49Fnj8YqaCdG0RyLwWR2lIIWs-WfMagRl6VfwmIuFq-6Fdda-i6SqDpy1dScLDHScfvgVfikRSX4eAD4mnrSuEYTsTXpuWbRVdPT6qFMzjyK4Dd-8As-XOs5EK_tndfTZ_hMq"/>
                  <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <Heart className="text-primary h-5 w-5" />
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
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow group border border-transparent hover:border-surface-variant transition-colors duration-300 flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <img alt="Classic Blouse" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw5vY09toiYH792hNX7_F0VTNMrjW1KU_nXTR70vNeX-UgBl6q7F9qPysJ0dpkKv65R6Q5LcBj3q8x_iMEn1LNMf8wBGEVZyjLS878EZg0JQpFMns0tBkI556waXwpqZQvHhxOoY5E8vI6NUdBco3hbU6zync8vjz-OaYJztZYuPCQlbRjU6NIlj7UAj4J_PuSzCqsA2da7s-WBnhWAhoFSmPGhF-OYbUVAysRsfUyZcnccY1-jtS3Kn5fEqYZ2Zwyq9QJmLv3xIZQ"/>
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
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow group border border-transparent hover:border-surface-variant transition-colors duration-300 flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <img alt="Modern Blazer" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-mkNYHRL6lyPOAtagEU39AUkVOBqpmaL76LRW13ocHqLa_LPXfdN7rsZe0As8SkQQ5c2_vjeig6m4NGhL0im6NP_qmqwyxruDd0t-o6XUGR7hjFzZnj3ZCAzfU12ks1kK0Sc8HjMPQvjkmc0plO9Wco8ZLvtqFRX_LW8yJBXg_F62B-9omXtWpHJIaqioIngFlvXEkngpfkWPM6hmMIPwsmA5sK46pY2nAOnsnKBahTwtW5wHNd_ozaWNTJgN4nOI6l_378v6vpFA"/>
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
      </section>

      {/* Value Prop Section */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-grid-margin bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
            <div className="md:col-span-5 md:pr-12">
              <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-6">
                Why Specialized Uniforms Matter
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                In the dynamic Caribbean business environment, a uniform is more than apparel; it is the physical embodiment of your brand's promise. We engineer our garments to meet the precise demands of your industry, blending high-end editorial aesthetics with robust, daily-wear functionality.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-surface p-3 rounded-full shadow-sm mr-4 mt-1 border border-outline-variant/30">
                    <BadgeCheck className="text-on-tertiary-container h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary mb-1">Brand Consistency</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Project unified excellence across every touchpoint of your organization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-surface p-3 rounded-full shadow-sm mr-4 mt-1 border border-outline-variant/30">
                    <Droplets className="text-on-tertiary-container h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary mb-1">Climate Optimized</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Fabrics engineered for breathability and comfort in tropical environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 mt-12 md:mt-0 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-raised relative z-10">
                <img alt="Professional woman in a tailored off-white blazer reviewing a tablet" className="w-full h-full object-cover" data-alt="A close-up lifestyle shot of a professional woman in a meticulously tailored off-white blazer, reviewing a digital tablet in a bright, modern corporate setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz6KvlZWxrFlynSiydkxmCALRYm2nTsbRzGJ4Ckvr26zuIisNjXBNQFhtcHUa1wxLKh4grliLNUuUShbK3Zty36o43LXHZU_1O-Tuwtr0TbteAbhxoQkwtMohuTio6uXW6PEND5PLUcS58xdnMt2-xfAdp3eX38MpY_Ty5_ctFzSdSFpgMzfyWdST-HXS_TRSKGU5ZG8FzCWykSnm0L5-0r9Ys-zcghMOodVWMe2kLwwj3W4R3RdbBUCKXUZiT23fNoaYMpIw4rRHV"/>
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen CTA */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop px-grid-margin">
        <div className="max-w-4xl mx-auto bg-on-primary-fixed rounded-2xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden">
          {/* Subtle background pattern or gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-on-primary-fixed via-on-primary-fixed to-tertiary-container z-0"></div>
          <div className="relative z-10">
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-primary mb-4">
              Consult with an Industry Expert
            </h2>
            <p className="font-body-md text-body-md text-on-primary/80 mb-10 max-w-xl mx-auto">
              Discover how our tailored uniform programs can elevate your team's presence and operational efficiency. Request a personalized consultation today.
            </p>
            <form className="max-w-md mx-auto flex flex-col space-y-6">
              <div className="relative">
                <label className="absolute -top-2.5 left-0 font-label-md text-label-md text-on-primary/70 text-xs uppercase tracking-wider" htmlFor="work-email">Work Email</label>
                <input className="w-full bg-transparent border-0 border-b border-on-primary/30 text-on-primary font-body-md focus:ring-0 focus:border-on-primary transition-colors py-2 px-0 placeholder:text-on-primary/20" id="work-email" placeholder="hello@company.com" type="email"/>
              </div>
              <button className="w-full bg-on-primary text-on-primary-fixed py-4 rounded font-label-md text-label-md hover:bg-secondary-fixed transition-colors duration-300 mt-4" type="button">
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
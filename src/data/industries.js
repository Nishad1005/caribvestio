// Single source of truth for the 5 industries CaribVestio serves.
// Used by the Home carousel, the dynamic industry pages, and the footer.
// NOTE: `image` for "security" and "schools" are temporary placeholders —
// swap the URLs here once real photography is supplied.

export const industries = [
  {
    slug: 'security',
    title: 'Security',
    tagline: 'Sharp, durable kit for guarding teams',
    blurb:
      'Hard-wearing uniforms and accessories for security firms and in-house guarding teams — built for visibility, authority, and long shifts.',
    // Placeholder image (hi-vis worker) — replace with real security photography.
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsPgRNfVgfsggQA_oOmjsJ7Z3vX7D_4gYucoUOalxUbDNEkZi4ZPfc9wruI2zBE-PcjGc-clGCiH2_op8xySosTLnkhG6JuWWP3i6n8FbsoFVBgczWjAzJPj5wRQDzAXhKfl-IGklb7T6ceR7OtMRWAStjRKyR64BJ6GcuZhz8DKGjx0chMifXwRyEfEpYt_r-GXjxIBWKl6TB9qRWRYypy907a0nNVA6qXkHJGAnRMKgbmD2L9G6idntWLpocnG9NlU3l-DSTPVu-',
    items: ['Caps', 'Belts', 'Epaulettes', 'Whistles', 'Hi-Vis Vests', 'Duty Shoes', 'Jackets', 'Trousers'],
    faqs: [
      { q: 'What security uniform items can you supply?', a: 'From caps, epaulettes and hi-vis vests to belts, whistles, jackets and duty footwear — everything a guarding or patrol team needs in one order.' },
      { q: 'Can security uniforms carry our company badge?', a: 'Yes — embroidered or printed badges, name tapes and epaulette insignia are all available with your branding.' },
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    tagline: 'Front-of-house to back-of-house, fully outfitted',
    blurb:
      'Polished, climate-ready attire for hotels, resorts, restaurants and cafés — from reception to housekeeping to the kitchen line.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFezUSMmI0WB6OAxOqWip_K1JccFT6AxpzIGRBhJ5O3FzPn_LXyfwCpEDpiNAPg9iWNwUPFV6QxSZRcAunJu3P_V0uGSrxOGbptNlWqgrV1zYRFjj-piw2QGzdZaCUUCoMUAgW015WOCOJJDRIBsmgRjKfiaINu2D3z-wh-_ovb6qu8qrIWIXmDAGvHpOwRTbDzy_b5XBk3GAvpDjLDJd3iyDPTu2I6YNut68VkltmVf1VqlblYxzgGsIwqOC0e3aYeWSxjoCo35xT',
    items: [
      'Shirts', 'Suit Pants', 'Waistcoats', 'Suit Jackets', 'Skirts', 'Dresses', 'Cardigans',
      'Polo Shirts', "Workman's Pants", 'Tunics', 'Pinafores', 'Ties', 'Scarves', 'Hats', 'Shoes',
    ],
    faqs: [
      { q: 'Can you outfit both front-of-house and kitchen teams?', a: 'Yes — reception blazers, server attire, chef coats and housekeeping uniforms can all be sourced together in one order.' },
      { q: 'Are the fabrics suited to the Caribbean climate?', a: 'We prioritise breathable, easy-care fabrics that hold up to long shifts in warm, humid conditions.' },
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    tagline: 'Hygienic, comfortable wear for clinical teams',
    blurb:
      'Easy-care scrubs and clinical essentials engineered for hygiene, comfort and long shifts in hospitals, clinics and care homes.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMyBUvam58tPXrEuxNswq-8SgbExxSKvfJTlMbDWxMrqX_v7iXUN6rUFjOPUoQva9FXKj7QcbC2GM1uJmy7Ma5PLB3SNmzvufz-pMo2eDmGrY8Htqf8UTn4pItkR1vU7elwtvaBNRaLrqNp9Z3bmQUCF3SGlde2iJFm6-ehWsKnuFlMKJOQYdT8FkoSSDZST4j9sbYDFlyh-i8ItHp7nXearvbwcVza3kBzfAs-WobmSKxrTRKru227d1dv16jeJrRz6RGqqQ8xW9r',
    items: ['Scrubs', 'Caps', 'Hairnets', 'Gloves', 'Lab Coats', 'Tunics', 'Clinical Shoes'],
    faqs: [
      { q: 'What healthcare garments can you supply in bulk?', a: 'Scrubs, lab coats, tunics, caps, hairnets and clinical footwear — in consistent colours across your whole team.' },
      { q: 'Can scrubs be colour-coded by department?', a: 'Yes — we can match colours by role or department and add embroidered logos or staff names.' },
    ],
  },
  {
    slug: 'schools',
    title: 'Schools',
    tagline: 'Logo-ready uniforms for every grade',
    blurb:
      'Complete school uniform programs with embroidered or printed logos — durable, comfortable, and consistent across the whole student body.',
    // Placeholder image — replace with real school uniform photography.
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOwfUxbOLGiaU4yJAjZaCBTFZtJWGBuQsIvVVT6ThXONOT-St7fvDdVEnwrO8PUUFD7kNG_VuXjKwyrcJLi-nug9gD0zIr85IIvKJU8X_UNa2E4OnlqTGDnB64fDO4e36dlZbF1vRv7lpfTo0FIBieWPKAoJlaW6sI0dWal60_jzQCfSWedZeDkJhZJEfGiy6oaf_BEA6WVgVtiIOVP5gnMcNI12vDHl9NLTINz45TMFvbgbJsjfaPh2T7LyWjVCsnBsF8_XuMl_wC',
    items: ['Logo Polo Shirts', 'Dress Shirts', 'Trousers', 'Skirts', 'Belts', 'Caps', 'Ties', 'Blazers', 'Sweaters'],
    faqs: [
      { q: 'Do you handle full school uniform programs with logos?', a: 'Yes — embroidered or printed school crests across polos, shirts, trousers, skirts, blazers and sweaters.' },
      { q: 'Can the school reorder easily year to year?', a: 'We keep your specifications on file so repeat and top-up orders stay consistent every term.' },
    ],
  },
  {
    slug: 'corporate',
    title: 'Corporate',
    tagline: 'Tailored attire that projects your brand',
    blurb:
      'Refined corporate uniforms that present a unified, professional image across reception, sales floors and executive teams.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOwfUxbOLGiaU4yJAjZaCBTFZtJWGBuQsIvVVT6ThXONOT-St7fvDdVEnwrO8PUUFD7kNG_VuXjKwyrcJLi-nug9gD0zIr85IIvKJU8X_UNa2E4OnlqTGDnB64fDO4e36dlZbF1vRv7lpfTo0FIBieWPKAoJlaW6sI0dWal60_jzQCfSWedZeDkJhZJEfGiy6oaf_BEA6WVgVtiIOVP5gnMcNI12vDHl9NLTINz45TMFvbgbJsjfaPh2T7LyWjVCsnBsF8_XuMl_wC',
    items: ['Suits', 'Blazers', 'Dress Shirts', 'Trousers', 'Skirts', 'Ties', 'Scarves', 'Branded Polos'],
    faqs: [
      { q: 'Can corporate uniforms reflect our brand colours?', a: 'Yes — tailored suiting, shirts and branded polos can be matched to your brand palette with your logo applied.' },
      { q: 'Do you cater for mixed teams and sizes?', a: 'We supply full size runs across reception, sales and executive roles in one coordinated order.' },
    ],
  },
];

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);

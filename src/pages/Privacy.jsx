const sections = [
  {
    heading: 'Information we collect',
    body: 'When you request a quote or contact us, we collect details you provide such as your name, company, work email, phone number, and the uniform requirements you share. We may also collect basic usage data (e.g. pages visited) to improve the site.',
  },
  {
    heading: 'How we use your information',
    body: 'We use your information to prepare and share supplier quotes, coordinate orders with manufacturers, respond to enquiries, and keep you updated on your order. We do not sell your personal information.',
  },
  {
    heading: 'Sharing with manufacturers & suppliers',
    body: 'To source quotes and fulfil orders, we share the relevant order details with the manufacturers and suppliers involved. We share only what is necessary to provide the service you have requested.',
  },
  {
    heading: 'Data retention',
    body: 'We keep your information for as long as needed to provide our services and to meet legal, accounting, or reporting obligations. You may request that we update or delete your details at any time.',
  },
  {
    heading: 'Your choices',
    body: 'You can ask us to access, correct, or delete the personal information we hold about you, and you can opt out of non-essential communications. Contact us using the details below to make a request.',
  },
  {
    heading: 'Contact',
    body: 'For any questions about this policy or your data, please reach out through our Contact page.',
  },
];

export default function Privacy() {
  return (
    <section className="w-full max-w-3xl mx-auto px-grid-margin pt-32 md:pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
      <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-tertiary-container mb-4">Legal</p>
      <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary dark:text-on-primary mb-4 tracking-tight">
        Privacy Policy
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-2">Last updated: June 2026</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-12 rounded-lg border border-outline-variant bg-surface-container-low p-4">
        This is a starter policy template. Please have it reviewed and tailored by a qualified professional before relying on it.
      </p>

      <div className="space-y-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-headline-md text-xl text-primary dark:text-on-primary mb-3">{s.heading}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

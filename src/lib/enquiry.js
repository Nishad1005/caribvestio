// Sends enquiry/quote submissions to your inbox via Web3Forms — no backend needed.
// Get a free access key at https://web3forms.com (tied to enquiry@caribvestio.com)
// and set VITE_WEB3FORMS_ACCESS_KEY in .env (see .env.example).

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const enquiryConfigured = Boolean(ACCESS_KEY);

export async function sendEnquiry(fields) {
  if (!ACCESS_KEY) {
    throw new Error('Email delivery is not configured (VITE_WEB3FORMS_ACCESS_KEY missing).');
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: ACCESS_KEY, ...fields }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Something went wrong sending your enquiry.');
  }
  return data;
}

import {
  money,
  quote
} from './cart.js';

export function normalizePhone(value) {
  const source = value.trim();
  if (!/^\+?[\d\s()-]+$/.test(source)) return '';
  const digits = source.replace(/[\s()+-]/g, '');
  if (!/^\d{8,15}$/.test(digits)) return '';
  const normalized = digits.startsWith('0') ? `62${digits.slice(1)}` : digits;
  return /^\d{8,15}$/.test(normalized) ? normalized : '';
}

export const validBusinessNumber = (value) => typeof value === 'string' && /^[1-9]\d{7,14}$/.test(value);

export function validateCheckout(state, contact) {
  if (!state.items.length) return {
    field: 'cart-heading',
    message: 'Pilih sneakers sebelum melanjutkan checkout.'
  };
  const name = contact.name.trim();
  if (name.length < 2 || name.length > 80 || /[\r\n]/.test(name)) return {
    field: 'customer-name',
    message: 'Isi nama 2–80 karakter dalam satu baris.'
  };
  if (!normalizePhone(contact.phone)) return {
    field: 'customer-phone',
    message: 'Isi nomor WhatsApp yang valid, 8–15 digit. Awalan 08 atau 62 diperbolehkan.'
  };
  return null;
}

export function buildMessage(state, contact) {
  const estimate = quote(state);
  return [
    'Halo sneakers pabs, saya ingin memesan sneakers.',
    `Nama: ${contact.name.trim()}`,
    `WhatsApp: ${normalizePhone(contact.phone)}`,
    '',
    ...estimate.lines.map((line) => `- ${line.name} / size ${line.size} × ${line.quantity} = ${money(line.subtotal)}`),
    '',
    `Total belanja: ${money(estimate.total)}`,
    'Mohon konfirmasi ketersediaan ukuran, ongkir, dan metode pembayaran.',
  ].join('\n');
}

export function buildWhatsAppUrl(number, state, contact) {
  if (!validBusinessNumber(number)) throw new Error('Nomor usaha belum tersedia.');
  const error = validateCheckout(state, contact);
  if (error) throw new Error(error.message);
  return `https://wa.me/${number}?text=${encodeURIComponent(buildMessage(state, contact))}`;
}
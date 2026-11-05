import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CATEGORIES,
  PRODUCTS,
  filterProducts,
  findProductVariant
} from '../js/data.js';
import {
  quote,
  setQuantity
} from '../js/cart.js';
import {
  emptyState,
  loadState,
  sanitizeState,
  saveState
} from '../js/storage.js';
import {
  buildMessage,
  buildWhatsAppUrl,
  normalizePhone,
  validBusinessNumber,
  validateCheckout
} from '../js/checkout.js';

const state = () => ({
  ...emptyState(),
  items: [{
    productId: 'court-low::42',
    quantity: 2
  }, {
    productId: 'canvas-high::40',
    quantity: 1
  }]
});
const contact = {
  name: 'Pembeli <A> & "B"',
  phone: '+62 812-3456-7890'
};

test('20 unique footwear products cover categories and combine search/filter', () => {
  assert.equal(PRODUCTS.length, 20);
  assert.equal(new Set(PRODUCTS.map((product) => product.id)).size, 20);
  for (const category of CATEGORIES.slice(1)) assert.ok(PRODUCTS.some((product) => product.category === category.id));
  assert.equal(filterProducts('Court Low', 'classic').length, 1);
  assert.equal(filterProducts('court', 'running').length, 0);
  assert.equal(filterProducts('', 'all').length, 20);
  assert.equal(findProductVariant('court-low::42').size, 42);
  assert.equal(findProductVariant('court-low::99'), undefined);
});

test('cart separates sizes, combines identical variants, and calculates purchase totals', () => {
  let items = setQuantity([], 'court-low::42', 1);
  items = setQuantity(items, 'court-low::42', 2);
  items = setQuantity(items, 'court-low::43', 1);
  assert.equal(items.length, 2);
  assert.equal(items[0].quantity, 2);
  for (const value of [0, -1, 1.5, 100, NaN, '2']) assert.throws(() => setQuantity(items, 'court-low::42', value), RangeError);
  assert.throws(() => setQuantity(items, 'unknown::42', 1), RangeError);
  assert.throws(() => setQuantity(items, 'court-low::99', 1), RangeError);
  const estimate = quote(state());
  assert.equal(estimate.total, 2227000);
  assert.equal(estimate.units, 3);
});

test('storage excludes contacts and prices; corrupted and denied storage recover safely', () => {
  let stored;
  const storage = {
    setItem: (_, value) => {
      stored = value;
    },
    getItem: () => stored
  };
  assert.ok(saveState({
    ...state(),
    name: 'Private',
    phone: '081234567890'
  }, () => storage));
  assert.equal(stored.includes('Private'), false);
  assert.equal(stored.includes('phone'), false);
  assert.deepEqual(loadState(() => storage).state, state());
  assert.equal(loadState(() => ({
    getItem: () => '{bad'
  })).failed, true);
  assert.equal(loadState(() => {
    throw Error('denied');
  }).failed, true);
  assert.equal(saveState(state(), () => {
    throw Error('quota');
  }), false);
  assert.deepEqual(sanitizeState({
    schemaVersion: 2,
    items: state().items
  }), emptyState());
});

test('storage drops unknown products, invalid quantities, duplicate variants and legacy item IDs', () => {
  const draft = state();
  draft.items.push({
    productId: 'unknown::42',
    quantity: 2
  }, {
    productId: 'retro-runner::41',
    quantity: 100
  }, {
    productId: 'court-low::42',
    quantity: 5
  }, {
    productId: 'court-low',
    quantity: 1
  }, null);
  assert.deepEqual(sanitizeState(draft), state());
});

test('contact validation supports local and international phones and rejects malformed input', () => {
  assert.equal(normalizePhone('0812 3456 7890'), '6281234567890');
  assert.equal(normalizePhone('+62 (812) 3456-7890'), '6281234567890');
  for (const value of ['123', '0812<script>', '0812+3456789', '1234567890123456']) assert.equal(normalizePhone(value), '');
  assert.equal(validateCheckout(state(), contact), null);
  assert.equal(validateCheckout(emptyState(), contact).field, 'cart-heading');
  assert.equal(validateCheckout(state(), {
    ...contact,
    name: ' '
  }).field, 'customer-name');
  assert.equal(validateCheckout(state(), {
    ...contact,
    name: 'A\nB'
  }).field, 'customer-name');
  assert.equal(validateCheckout(state(), {
    ...contact,
    phone: 'abc'
  }).field, 'customer-phone');
});

test('WhatsApp draft includes sizes and full totals without claiming automatic confirmation', () => {
  const message = buildMessage(state(), contact);
  assert.ok(message.includes('2.227.000'));
  assert.ok(message.includes('Court Low Leather / size 42 × 2'));
  assert.ok(message.includes('Canvas High Top / size 40 × 1'));
  assert.ok(message.includes('konfirmasi ketersediaan ukuran'));
  const url = new URL(buildWhatsAppUrl('12025550123', state(), contact));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.searchParams.get('text'), message);
  assert.equal(validBusinessNumber(''), false);
  assert.equal(validBusinessNumber('+62812345678'), false);
  assert.throws(() => buildWhatsAppUrl('', state(), contact));
});
import {
  findProductVariant
} from './data.js';
import {
  validQuantity
} from './cart.js';

export const STORAGE_KEY = 'sneakers-pabs:cart:v1';
export const emptyState = () => ({
  schemaVersion: 1,
  items: []
});

export function sanitizeState(value) {
  const state = emptyState();
  if (!value || value.schemaVersion !== 1) return state;
  const seen = new Set();
  if (Array.isArray(value.items)) {
    for (const item of value.items) {
      if (!item || !findProductVariant(item.productId) || !validQuantity(item.quantity) || seen.has(item.productId)) continue;
      seen.add(item.productId);
      state.items.push({
        productId: item.productId,
        quantity: item.quantity
      });
    }
  }
  return state;
}

export function loadState(getStorage = () => globalThis.localStorage) {
  try {
    const raw = getStorage().getItem(STORAGE_KEY);
    return {
      state: sanitizeState(raw ? JSON.parse(raw) : null),
      failed: false
    };
  } catch {
    return {
      state: emptyState(),
      failed: true
    };
  }
}

export function saveState(state, getStorage = () => globalThis.localStorage) {
  try {
    // Whitelist excludes contact information and derived prices, even if state grows later.
    const safe = {
      schemaVersion: 1,
      items: state.items.map(({
        productId,
        quantity
      }) => ({
        productId,
        quantity
      }))
    };
    getStorage().setItem(STORAGE_KEY, JSON.stringify(safe));
    return true;
  } catch {
    return false;
  }
}
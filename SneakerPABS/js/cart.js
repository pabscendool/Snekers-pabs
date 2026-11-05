import {
  findProductVariant
} from './data.js';

export const money = (value) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
}).format(value);

export const validQuantity = (value) => Number.isInteger(value) && value >= 1 && value <= 99;

export function setQuantity(items, productKey, quantity) {
  if (!findProductVariant(productKey) || !validQuantity(quantity)) throw new RangeError('Pilih ukuran yang tersedia dan jumlah bulat antara 1 dan 99.');
  const exists = items.some((item) => item.productId === productKey);
  return exists ? items.map((item) => item.productId === productKey ? {
    productId: productKey,
    quantity
  } : item) : [...items, {
    productId: productKey,
    quantity
  }];
}

export const removeItem = (items, productKey) => items.filter((item) => item.productId !== productKey);

export function quote(state) {
  const lines = state.items.flatMap((item) => {
    const product = findProductVariant(item.productId);
    return product && validQuantity(item.quantity) ? [{
      ...product,
      quantity: item.quantity,
      subtotal: product.price * item.quantity
    }] : [];
  });
  return {
    lines,
    units: lines.reduce((sum, line) => sum + line.quantity, 0),
    total: lines.reduce((sum, line) => sum + line.subtotal, 0)
  };
}
export function applyDiscount(price: number, percent: number): number {
  if (percent < 0 || percent > 100) throw new RangeError('Invalid discount')
  return price - (price * percent) / 100
}

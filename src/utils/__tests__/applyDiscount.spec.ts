import { describe, it, expect } from 'vitest'
import { applyDiscount } from '../applyDiscount'

describe('applyDiscount', () => {
  it('applies 10% discount', () => {
    expect(applyDiscount(200, 10)).toBe(180)
  })

  it('returns the same price for 0%', () => {
    expect(applyDiscount(200, 0)).toBe(200)
  })

  it('rejects discount above 100%', () => {
    expect(() => applyDiscount(200, 150)).toThrow(RangeError)
  })

  it('rejects negative discount', () => {
    expect(() => applyDiscount(200, -5)).toThrow(RangeError)
  })
})

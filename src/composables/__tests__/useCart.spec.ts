import { describe, it, expect } from 'vitest'
import { useCart } from '../useCart'

describe('useCart', () => {
  it('starts empty', () => {
    const { items, totalCents } = useCart()
    expect(items.value).toEqual([])
    expect(totalCents.value).toBe(0)
  })

  it('recalculates total when items are added', () => {
    const { totalCents, add } = useCart()
    add(10000, 2) // 100.00 × 2
    add(5000) // 50.00 × 1
    expect(totalCents.value).toBe(25000)
  })

  it('gives each call its own cart', () => {
    const first = useCart()
    const second = useCart()
    first.add(1000)
    expect(second.totalCents.value).toBe(0)
  })
})

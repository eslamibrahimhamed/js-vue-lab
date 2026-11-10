import { describe, it, expect } from 'vitest'
import { formatItemCode } from '../formatItemCode'

describe('formatItemCode', () => {
  it('uppercases the code', () => {
    expect(formatItemCode('ab-123')).toBe('AB-123')
  })

  it('removes spaces around the code', () => {
    expect(formatItemCode('  ab-123  ')).toBe('AB-123')
  })

  it('does not change the original string (immutability)', () => {
    const input = 'ab-123'
    formatItemCode(input)
    expect(input).toBe('ab-123')
  })
})

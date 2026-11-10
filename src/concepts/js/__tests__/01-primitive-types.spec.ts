// Learning tests for https://33jsconcepts.com/concepts/primitive-types
import { describe, it, expect } from 'vitest'

describe('primitive types', () => {
  it('has 7 primitive types (typeof null is a historic bug)', () => {
    const values = ['text', 42, 10n, true, undefined, Symbol('id'), null]
    expect(values.map((v) => typeof v)).toEqual([
      'string',
      'number',
      'bigint',
      'boolean',
      'undefined',
      'symbol',
      'object',
    ])
  })

  it('is immutable: string methods return a new value', () => {
    const str = 'hello'
    expect(str.toUpperCase()).toBe('HELLO')
    expect(str).toBe('hello')
  })

  it('throws on index assignment in strict mode (ES modules)', () => {
    const str = 'hello'
    expect(() => {
      // @ts-expect-error string indexes are read-only
      str[0] = 'H'
    }).toThrow(TypeError)
  })

  it('uses autoboxing to call methods, wrapper objects are not primitives', () => {
    expect('abc'.length).toBe(3)
    expect(typeof new String('abc')).toBe('object')
  })

  it('NaN is the only value not equal to itself', () => {
    const value = Number('abc')
    expect(value === value).toBe(false)
    expect(Number.isNaN(value)).toBe(true)
  })

  it('floating point: use toBeCloseTo for money, never toBe', () => {
    expect(0.1 + 0.2).not.toBe(0.3)
    expect(0.1 + 0.2).toBeCloseTo(0.3)
  })

  it('number loses precision past MAX_SAFE_INTEGER, BigInt does not', () => {
    const max = Number.MAX_SAFE_INTEGER
    expect(max + 1 === max + 2).toBe(true)
    expect(BigInt(max) + 1n === BigInt(max) + 2n).toBe(false)
  })

  it('every Symbol is unique even with the same description', () => {
    expect(Symbol('id') === Symbol('id')).toBe(false)
  })
})

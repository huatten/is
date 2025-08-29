import isNatural from '../../src/number/is-natural'

test('`121212` 是自然数', () => {
  expect(isNatural(121212)).toBe(true)
})

test('`0` 是自然数', () => {
  expect(isNatural(0)).toBe(true)
})

test('`1` 是自然数', () => {
  expect(isNatural(1)).toBe(true)
})

test('`0.99` 不是自然数', () => {
  expect(isNatural(0.99)).toBe(false)
})

test('`-1` 不是自然数', () => {
  expect(isNatural(-1)).toBe(false)
})

test('`1.5` 不是自然数', () => {
  expect(isNatural(1.5)).toBe(false)
})

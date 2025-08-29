import isFinite from '../../src/number/is-finite'

test('`12` 是有限数', () => {
  expect(isFinite(12)).toBe(true)
})

test('`0` 是有限数', () => {
  expect(isFinite(0)).toBe(true)
})

test('`-5` 是有限数', () => {
  expect(isFinite(-5)).toBe(true)
})

test('`12/0` 不是有限数', () => {
  expect(isFinite(12 / 0)).toBe(false)
})

test('`Infinity` 不是有限数', () => {
  expect(isFinite(Infinity)).toBe(false)
})

test('`-Infinity` 不是有限数', () => {
  expect(isFinite(-Infinity)).toBe(false)
})

test('`NaN` 不是有限数', () => {
  expect(isFinite(NaN)).toBe(false)
})

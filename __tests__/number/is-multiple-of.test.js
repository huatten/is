import isMultipleOf from '../../src/number/is-multiple-of'

test('`10` 是 `2` 的倍数', () => {
  expect(isMultipleOf(10, 2)).toBe(true)
})

test('`10` 不是 `3` 的倍数', () => {
  expect(isMultipleOf(10, 3)).toBe(false)
})

test('`15` 是 `5` 的倍数', () => {
  expect(isMultipleOf(15, 5)).toBe(true)
})

test('`7` 不是 `2` 的倍数', () => {
  expect(isMultipleOf(7, 2)).toBe(false)
})

test('`0` 是 `5` 的倍数', () => {
  expect(isMultipleOf(0, 5)).toBe(true)
})

test('`"10"` 不是 `2` 的倍数', () => {
  expect(isMultipleOf('10', 2)).toBe(false)
})

test('`10` 不是 `"2"` 的倍数', () => {
  expect(isMultipleOf(10, '2')).toBe(false)
})

test('除数为 `0` 时返回 `false`', () => {
  expect(isMultipleOf(10, 0)).toBe(false)
})

test('`NaN` 不是任何数的倍数', () => {
  expect(isMultipleOf(NaN, 2)).toBe(false)
})

test('任何数都不是 `NaN` 的倍数', () => {
  expect(isMultipleOf(10, NaN)).toBe(false)
})

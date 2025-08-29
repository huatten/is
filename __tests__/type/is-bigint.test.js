import isBigInt from '../../src/type/is-bigint'

test('BigInt值是BigInt', () => {
  expect(isBigInt(1n)).toBe(true)
  expect(isBigInt(0n)).toBe(true)
  expect(isBigInt(-1n)).toBe(true)
})

test('BigInt函数创建的值是BigInt', () => {
  expect(isBigInt(BigInt(123))).toBe(true)
  expect(isBigInt(BigInt('456'))).toBe(true)
})

test('普通数字不是BigInt', () => {
  expect(isBigInt(123)).toBe(false)
  expect(isBigInt(0)).toBe(false)
  expect(isBigInt(-1)).toBe(false)
})

test('字符串不是BigInt', () => {
  expect(isBigInt('123')).toBe(false)
  expect(isBigInt('1n')).toBe(false)
})

test('null不是BigInt', () => {
  expect(isBigInt(null)).toBe(false)
})

test('undefined不是BigInt', () => {
  expect(isBigInt(undefined)).toBe(false)
})

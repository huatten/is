import isArrayLike from '../../src/type/is-array-like'

test('数组是类数组', () => {
  expect(isArrayLike([])).toBe(true)
  expect(isArrayLike([1, 2, 3])).toBe(true)
})

test('字符串是类数组', () => {
  expect(isArrayLike('hello')).toBe(true)
  expect(isArrayLike('')).toBe(true)
})

test('具有length属性的对象是类数组', () => {
  expect(isArrayLike({ length: 5 })).toBe(true)
  expect(isArrayLike({ 0: 'a', 1: 'b', length: 2 })).toBe(true)
})

test('空对象不是类数组', () => {
  expect(isArrayLike({})).toBe(false)
})

test('null不是类数组', () => {
  expect(isArrayLike(null)).toBe(false)
})

test('函数不是类数组', () => {
  expect(isArrayLike(function () {})).toBe(false)
})

test('负数length的对象不是类数组', () => {
  expect(isArrayLike({ length: -1 })).toBe(false)
})

test('非整数length的对象不是类数组', () => {
  expect(isArrayLike({ length: 1.5 })).toBe(false)
})

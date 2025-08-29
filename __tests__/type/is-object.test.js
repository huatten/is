import isObject from '../../src/type/is-object'

test('普通对象是Object', () => {
  expect(isObject({})).toBe(true)
  expect(isObject({ a: 1 })).toBe(true)
})

test('数组是Object', () => {
  expect(isObject([])).toBe(true)
  expect(isObject([1, 2, 3])).toBe(true)
})

test('函数是Object', () => {
  expect(isObject(Function)).toBe(true)
  expect(isObject(() => {})).toBe(true)
  expect(isObject(function () {})).toBe(true)
})

test('null不是Object', () => {
  expect(isObject(null)).toBe(false)
})

test('undefined不是Object', () => {
  expect(isObject(undefined)).toBe(false)
})

test('字符串不是Object', () => {
  expect(isObject('object')).toBe(false)
  expect(isObject('')).toBe(false)
})

test('数字不是Object', () => {
  expect(isObject(123)).toBe(false)
  expect(isObject(0)).toBe(false)
})

test('布尔值不是Object', () => {
  expect(isObject(true)).toBe(false)
  expect(isObject(false)).toBe(false)
})

test('Symbol不是Object', () => {
  expect(isObject(Symbol('test'))).toBe(false)
})

test('包装对象是Object', () => {
  expect(isObject(new Number(0))).toBe(true)
  expect(isObject(new String(''))).toBe(true)
  expect(isObject(new Boolean(false))).toBe(true)
})

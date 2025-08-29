import isFunction from '../../src/type/is-function'

test('普通函数是function', () => {
  expect(isFunction(function () {})).toBe(true)
  expect(isFunction(function named() {})).toBe(true)
})

test('箭头函数是function', () => {
  expect(isFunction(() => {})).toBe(true)
  expect(isFunction((x) => x * 2)).toBe(true)
})

test('异步函数是function', () => {
  expect(isFunction(async () => {})).toBe(true)
  expect(isFunction(async function () {})).toBe(true)
})

test('生成器函数是function', () => {
  expect(isFunction(function* () {})).toBe(true)
  expect(isFunction(function* generator() {})).toBe(true)
})

test('类是function', () => {
  expect(isFunction(class Any {})).toBe(true)
  expect(isFunction(class {})).toBe(true)
})

test('内置函数是function', () => {
  expect(isFunction(Math.round)).toBe(true)
  expect(isFunction(Array.isArray)).toBe(true)
})

test('正则表达式不是function', () => {
  expect(isFunction(/abc/)).toBe(false)
})

test('对象不是function', () => {
  expect(isFunction({})).toBe(false)
  expect(isFunction({ call: function () {} })).toBe(false)
})

test('字符串不是function', () => {
  expect(isFunction('function')).toBe(false)
})

test('数字不是function', () => {
  expect(isFunction(123)).toBe(false)
})

test('null不是function', () => {
  expect(isFunction(null)).toBe(false)
})

test('undefined不是function', () => {
  expect(isFunction(undefined)).toBe(false)
})

import isAsyncFunction from '../../src/type/is-async-function'

test('异步箭头函数是异步函数', () => {
  expect(isAsyncFunction(async () => {})).toBe(true)
})

test('异步函数声明是异步函数', () => {
  expect(isAsyncFunction(async function () {})).toBe(true)
})

test('普通箭头函数不是异步函数', () => {
  expect(isAsyncFunction(() => {})).toBe(false)
})

test('普通函数声明不是异步函数', () => {
  expect(isAsyncFunction(function () {})).toBe(false)
})

test('箭头函数表达式不是异步函数', () => {
  const fn = () => {}
  expect(isAsyncFunction(fn)).toBe(false)
})

test('函数表达式不是异步函数', () => {
  const fn = function () {}
  expect(isAsyncFunction(fn)).toBe(false)
})

test('null不是异步函数', () => {
  expect(isAsyncFunction(null)).toBe(false)
})

test('undefined不是异步函数', () => {
  expect(isAsyncFunction(undefined)).toBe(false)
})

test('对象不是异步函数', () => {
  expect(isAsyncFunction({})).toBe(false)
})

test('字符串不是异步函数', () => {
  expect(isAsyncFunction('async function')).toBe(false)
})

test('数字不是异步函数', () => {
  expect(isAsyncFunction(123)).toBe(false)
})

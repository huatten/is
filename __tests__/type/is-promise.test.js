import isPromise from '../../src/type/is-promise'

test('Promise.resolve()是Promise', () => {
  expect(isPromise(Promise.resolve())).toBe(true)
})

test('new Promise是Promise', () => {
  expect(isPromise(new Promise(() => {}))).toBe(true)
  expect(isPromise(new Promise((resolve) => resolve()))).toBe(true)
  expect(isPromise(new Promise((resolve, reject) => reject()))).toBe(true)
})

test('普通对象不是Promise', () => {
  expect(isPromise({})).toBe(false)
  expect(isPromise({ then: function () {} })).toBe(true) // 有then方法的对象被认为是Promise-like
})

test('函数不是Promise', () => {
  expect(isPromise(() => {})).toBe(false)
})

test('null不是Promise', () => {
  expect(isPromise(null)).toBe(false)
})

test('undefined不是Promise', () => {
  expect(isPromise(undefined)).toBe(false)
})

test('字符串不是Promise', () => {
  expect(isPromise('promise')).toBe(false)
  expect(isPromise('')).toBe(false)
})

test('数组不是Promise', () => {
  expect(isPromise([])).toBe(false)
  expect(isPromise([Promise.resolve()])).toBe(false)
})

test('数字不是Promise', () => {
  expect(isPromise(123)).toBe(false)
  expect(isPromise(0)).toBe(false)
})

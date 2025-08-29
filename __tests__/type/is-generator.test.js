import isGenerator from '../../src/type/is-generator'

test('生成器函数是Generator', () => {
  expect(isGenerator(function* () {})).toBe(true)
  expect(isGenerator(function* generatorFn() {})).toBe(true)
})

test('普通函数不是Generator', () => {
  expect(isGenerator(function () {})).toBe(false)
})

test('箭头函数不是Generator', () => {
  expect(isGenerator(() => {})).toBe(false)
})

test('异步函数不是Generator', () => {
  expect(isGenerator(async function () {})).toBe(false)
})

test('null不是Generator', () => {
  expect(isGenerator(null)).toBe(false)
})

test('undefined不是Generator', () => {
  expect(isGenerator(undefined)).toBe(false)
})

test('对象不是Generator', () => {
  expect(isGenerator({})).toBe(false)
  expect(isGenerator({ next: function () {} })).toBe(false)
})

test('字符串不是Generator', () => {
  expect(isGenerator('generator')).toBe(false)
})

test('数字不是Generator', () => {
  expect(isGenerator(123)).toBe(false)
})

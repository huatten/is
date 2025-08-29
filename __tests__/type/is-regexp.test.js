import isRegexp from '../../src/type/is-regexp'

test('正则表达式字面量是Regexp', () => {
  expect(isRegexp(/\d/)).toBe(true)
  expect(isRegexp(/abc/g)).toBe(true)
  expect(isRegexp(new RegExp('abc'))).toBe(true)
})

test('RegExp构造函数创建的是Regexp', () => {
  expect(isRegexp(new RegExp(/\d/))).toBe(true)
  expect(isRegexp(new RegExp('abc', 'g'))).toBe(true)
})

test('数字不是Regexp', () => {
  expect(isRegexp(1)).toBe(false)
  expect(isRegexp(0)).toBe(false)
})

test('字符串不是Regexp', () => {
  expect(isRegexp('regexp')).toBe(false)
  expect(isRegexp('/abc/')).toBe(false)
})

test('null不是Regexp', () => {
  expect(isRegexp(null)).toBe(false)
})

test('undefined不是Regexp', () => {
  expect(isRegexp(undefined)).toBe(false)
})

test('对象不是Regexp', () => {
  expect(isRegexp({})).toBe(false)
  expect(isRegexp({ regexp: /\d/ })).toBe(false)
})

test('数组不是Regexp', () => {
  expect(isRegexp([])).toBe(false)
  expect(isRegexp([/\d/])).toBe(false)
})

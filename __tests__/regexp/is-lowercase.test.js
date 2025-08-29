import isLowercase from '../../src/regexp/is-lowercase'

test('`hello` 是小写字母', () => {
  expect(isLowercase('hello')).toBe(true)
})

test('`world` 是小写字母', () => {
  expect(isLowercase('world')).toBe(true)
})

test('`Java` 不是纯小写字母', () => {
  expect(isLowercase('Java')).toBe(false)
})

test('`ABS12` 不是小写字母', () => {
  expect(isLowercase('ABS12')).toBe(false)
})

test('`JavaScript` 不是纯小写字母', () => {
  expect(isLowercase('JavaScript')).toBe(false)
})

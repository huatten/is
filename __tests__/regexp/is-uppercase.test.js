import isUppercase from '../../src/regexp/is-uppercase'

test('`JAVA` 是大写字母', () => {
  expect(isUppercase('JAVA')).toBe(true)
})

test('`ABS` 是大写字母', () => {
  expect(isUppercase('ABS')).toBe(true)
})

test('`Java` 不是纯大写字母', () => {
  expect(isUppercase('Java')).toBe(false)
})

test('`ABS12` 不是大写字母', () => {
  expect(isUppercase('ABS12')).toBe(false)
})

test('`hello` 不是大写字母', () => {
  expect(isUppercase('hello')).toBe(false)
})

test('`JavaScript` 不是纯大写字母', () => {
  expect(isUppercase('JavaScript')).toBe(false)
})

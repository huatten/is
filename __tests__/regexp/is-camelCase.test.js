import isCamelCase from '../../src/regexp/is-camelCase'

test('`camelCase` 是驼峰命名法', () => {
  expect(isCamelCase('camelCase')).toBe(true)
})

test('`isCamelCase` 是驼峰命名法', () => {
  expect(isCamelCase('isCamelCase')).toBe(true)
})

test('`singleword` 是驼峰命名法', () => {
  expect(isCamelCase('singleword')).toBe(true)
})

test('`CamelCase` 不是驼峰命名法', () => {
  expect(isCamelCase('CamelCase')).toBe(false)
})

test('`camel_case` 不是驼峰命名法', () => {
  expect(isCamelCase('camel_case')).toBe(false)
})

test('`camelCase123` 不是驼峰命名法', () => {
  expect(isCamelCase('camelCase123')).toBe(false)
})

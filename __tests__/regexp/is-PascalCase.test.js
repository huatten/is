import isPascalCase from '../../src/regexp/is-PascalCase'

test('`PascalCase` 是帕斯卡命名法', () => {
  expect(isPascalCase('PascalCase')).toBe(true)
})

test('`IsPascalCase` 是帕斯卡命名法', () => {
  expect(isPascalCase('IsPascalCase')).toBe(true)
})

test('`Singleword` 是帕斯卡命名法', () => {
  expect(isPascalCase('Singleword')).toBe(true)
})

test('`camelCase` 不是帕斯卡命名法', () => {
  expect(isPascalCase('camelCase')).toBe(false)
})

test('`Pascal_Case` 不是帕斯卡命名法', () => {
  expect(isPascalCase('Pascal_Case')).toBe(false)
})

test('`PascalCase123` 不是帕斯卡命名法', () => {
  expect(isPascalCase('PascalCase123')).toBe(false)
})

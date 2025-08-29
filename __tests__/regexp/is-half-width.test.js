import isHalfWidth from '../../src/regexp/is-half-width'

test('`Hello World` 包含半角字符', () => {
  expect(isHalfWidth('Hello World')).toBe(true)
})

test('`ABC123` 包含半角字符', () => {
  expect(isHalfWidth('ABC123')).toBe(true)
})

test('`ＡＢＣ１２３` 不包含半角字符', () => {
  expect(isHalfWidth('ＡＢＣ１２３')).toBe(false)
})

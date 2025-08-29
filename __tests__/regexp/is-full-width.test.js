import isFullWidth from '../../src/regexp/is-full-width'

test('`Hello World` 不包含全角字符', () => {
  expect(isFullWidth('Hello World')).toBe(false)
})

test('`ＡＢＣ１２３` 包含全角字符', () => {
  expect(isFullWidth('ＡＢＣ１２３')).toBe(true)
})

test('`你好世界` 包含全角字符', () => {
  expect(isFullWidth('你好世界')).toBe(true)
})

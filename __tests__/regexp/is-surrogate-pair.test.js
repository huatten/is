import isSurrogatePair from '../../src/regexp/is-surrogate-pair'

test('`Hello World` 不包含代理对字符', () => {
  expect(isSurrogatePair('Hello World')).toBe(false)
})

test('`𠮷` 包含代理对字符', () => {
  expect(isSurrogatePair('𠮷')).toBe(true)
})

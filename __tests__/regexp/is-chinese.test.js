import isChinese from '../../src/regexp/is-chinese'

test('`你好` 是中文', () => {
  expect(isChinese('你好')).toBe(true)
})

test('`你好123` 不是纯中文', () => {
  expect(isChinese('你好123')).toBe(false)
})

test('`你2好` 不是纯中文', () => {
  expect(isChinese('你2好')).toBe(false)
})

test('`Hello` 不是中文', () => {
  expect(isChinese('Hello')).toBe(false)
})

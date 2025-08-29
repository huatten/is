import isAscii from '../../src/regexp/is-ascii'

test('`Hello World` 只包含ASCII字符', () => {
  expect(isAscii('Hello World')).toBe(true)
})

test('`Hello World!` 只包含ASCII字符', () => {
  expect(isAscii('Hello World!')).toBe(true)
})

test('`Héllo Wörld` 不只包含ASCII字符', () => {
  expect(isAscii('Héllo Wörld')).toBe(false)
})

test('空字符串只包含ASCII字符', () => {
  expect(isAscii('')).toBe(true)
})

import isString from '../../src/type/is-string'

test('是不是字符串', () => {
  expect(isString('message')).toBe(true)
})

import isIP from '../../src/regexp/is-ip'

test('`192.168.1.1` 是有效的IP地址', () => {
  expect(isIP('192.168.1.1')).toBe(true)
})

test('`2001:0db8:85a3:0000:0000:8a2e:0370:7334` 是有效的IP地址', () => {
  expect(isIP('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true)
})

test('`invalid.ip` 不是有效的IP地址', () => {
  expect(isIP('invalid.ip')).toBe(false)
})

test('`256.1.1.1` 不是有效的IP地址', () => {
  expect(isIP('256.1.1.1')).toBe(false)
})

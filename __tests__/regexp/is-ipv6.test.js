import isIPv6 from '../../src/regexp/is-ipv6'

test('`2001:0db8:85a3:0000:0000:8a2e:0370:7334` 是有效的IPv6地址', () => {
  expect(isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true)
})

test('`::1` 是有效的IPv6地址', () => {
  expect(isIPv6('::1')).toBe(true)
})

test('`192.168.1.1` 不是IPv6地址', () => {
  expect(isIPv6('192.168.1.1')).toBe(false)
})

test('`invalid.ipv6` 不是有效的IPv6地址', () => {
  expect(isIPv6('invalid.ipv6')).toBe(false)
})

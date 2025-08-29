import isIPv4 from '../../src/regexp/is-ipv4'

test('`192.168.1.1` 是有效的IPv4地址', () => {
  expect(isIPv4('192.168.1.1')).toBe(true)
})

test('`255.255.255.255` 是有效的IPv4地址', () => {
  expect(isIPv4('255.255.255.255')).toBe(true)
})

test('`256.1.1.1` 不是有效的IPv4地址', () => {
  expect(isIPv4('256.1.1.1')).toBe(false)
})

test('`2001:0db8:85a3:0000:0000:8a2e:0370:7334` 不是IPv4地址', () => {
  expect(isIPv4('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(false)
})

import isMACAddress from '../../src/regexp/is-mac-address'

test('`00:11:22:33:44:55` 是有效的MAC地址', () => {
  expect(isMACAddress('00:11:22:33:44:55')).toBe(true)
})

test('`00-11-22-33-44-55` 是有效的MAC地址', () => {
  expect(isMACAddress('00-11-22-33-44-55')).toBe(true)
})

test('`0011.2233.4455` 是有效的MAC地址', () => {
  expect(isMACAddress('0011.2233.4455')).toBe(true)
})

test('`00:11:22:33:44` 不是有效的MAC地址', () => {
  expect(isMACAddress('00:11:22:33:44')).toBe(false)
})

test('`00:11:22:33:44:GG` 不是有效的MAC地址', () => {
  expect(isMACAddress('00:11:22:33:44:GG')).toBe(false)
})

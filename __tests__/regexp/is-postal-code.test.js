import isPostalCode from '../../src/regexp/is-postal-code'

test('`12345` 是有效的US邮政编码', () => {
  expect(isPostalCode('12345', 'US')).toBe(true)
})

test('`12345-6789` 是有效的US邮政编码', () => {
  expect(isPostalCode('12345-6789', 'US')).toBe(true)
})

test('`M5V 3L9` 是有效的CA邮政编码', () => {
  expect(isPostalCode('M5V 3L9', 'CA')).toBe(true)
})

test('`SW1A 1AA` 是有效的UK邮政编码', () => {
  expect(isPostalCode('SW1A 1AA', 'UK')).toBe(true)
})

test('`12345` 是有效的通用邮政编码', () => {
  expect(isPostalCode('12345')).toBe(true)
})

test('`invalid` 不是有效的邮政编码', () => {
  expect(isPostalCode('invalid')).toBe(false)
})

import isCreditCard from '../../src/regexp/is-credit-card'

test('`4532015112830366` 是有效的信用卡号码', () => {
  expect(isCreditCard('4532015112830366')).toBe(true)
})

test('`4532-0151-1283-0366` 是有效的信用卡号码', () => {
  expect(isCreditCard('4532-0151-1283-0366')).toBe(true)
})

test('`1234567890123456` 不是有效的信用卡号码', () => {
  expect(isCreditCard('1234567890123456')).toBe(false)
})

test('`4532015112830367` 不是有效的信用卡号码', () => {
  expect(isCreditCard('4532015112830367')).toBe(false)
})

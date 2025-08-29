import isPhoneNumber from '../../src/regexp/is-phone-number'

test('`17888809008` 是有效的电话号码', () => {
  expect(isPhoneNumber('17888809008')).toBe(true)
})

test('`11888809008` 不是有效的电话号码', () => {
  expect(isPhoneNumber('11888809008')).toBe(false)
})

test('`12990897657` 不是有效的电话号码', () => {
  expect(isPhoneNumber('12990897657')).toBe(false)
})

test('`109089887676` 不是有效的电话号码', () => {
  expect(isPhoneNumber('109089887676')).toBe(false)
})

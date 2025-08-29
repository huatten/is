import isProvince from '../../src/regexp/is-province'

test('`甘肃` 是省份', () => {
  expect(isProvince('甘肃')).toBe(true)
})

test('`北京` 是省份', () => {
  expect(isProvince('北京')).toBe(true)
})

test('`上海` 是省份', () => {
  expect(isProvince('上海')).toBe(true)
})

test('`张掖` 不是省份', () => {
  expect(isProvince('张掖')).toBe(false)
})

test('`东京` 不是省份', () => {
  expect(isProvince('东京')).toBe(false)
})

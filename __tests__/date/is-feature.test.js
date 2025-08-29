import isFeature from '../../src/date/is-feature'

test('未来的日期是feature', () => {
  const futureDate = new Date('01/26/2030')
  expect(isFeature(futureDate)).toBe(true)
})

test('过去的日期不是feature', () => {
  const pastDate = new Date('01/26/2015')
  expect(isFeature(pastDate)).toBe(false)
})

test('时间戳对应的未来日期是feature', () => {
  const timestamp = 1723651200000 // 2024年
  expect(isFeature(timestamp)).toBe(true)
})

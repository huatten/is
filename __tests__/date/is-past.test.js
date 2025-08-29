import isPast from '../../src/date/is-past'

test('过去的日期是past', () => {
  const pastDate = new Date('01/26/2015')
  expect(isPast(pastDate)).toBe(true)
})

test('未来的日期不是past', () => {
  const futureDate = new Date('01/26/2030')
  expect(isPast(futureDate)).toBe(false)
})

test('时间戳对应的过去日期是past', () => {
  const timestamp = 1422230400000 // 2015年
  expect(isPast(timestamp)).toBe(true)
})

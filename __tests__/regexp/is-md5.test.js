import isMD5 from '../../src/regexp/is-md5'

test('`2ef7bde608ce5404e97d5f042f95f89f` 是合格MD5', () => {
  expect(isMD5('2ef7bde608ce5404e97d5f042f95f89f')).toBe(true)
})

test('`7b77e46d3af290b741eb6b00c66575ee` 是合格MD5', () => {
  expect(isMD5('7b77e46d3af290b741eb6b00c66575ee')).toBe(true)
})

test('`2ef7bde608ce5404e97d5f042f95f89f0` 是不合格MD5', () => {
  expect(isMD5('2ef7bde608ce5404e97d5f042f95f89f0')).toBe(false)
})

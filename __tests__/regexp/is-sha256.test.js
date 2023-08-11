import isSHA256 from '../../src/regexp/is-sha256'

test('`7c4a8d09ca3762af61e59520943dc26494f8941b76f1ca92f32af61e5952094f` 是合格SHA-256', () => {
  expect(isSHA256('7c4a8d09ca3762af61e59520943dc26494f8941b76f1ca92f32af61e5952094f')).toBe(true)
})

test('`7b77e46d3af290b741eb6b00c66575ee` 不是合格SHA-256', () => {
  expect(isSHA256('7b77e46d3af290b741eb6b00c66575ee')).toBe(false)
})

test('`7b77e46d3af290b741eb6b00c66575ee8eae` 不是合格SHA-256', () => {
  expect(isSHA256('7b77e46d3af290b741eb6b00c66575ee8eae')).toBe(false)
})

import isUUID from '../../src/regexp/is-uuid'

test('`123e4567-e89b-12d3-a456-426655440000` 是合格uuid', () => {
  expect(isUUID('123e4567-e89b-12d3-a456-426655440000')).toBe(true)
})

test('`7b77e-46d3af29-0b741eb6b-00c66575ee` 是不合格uuid', () => {
  expect(isUUID('7b77e-46d3af29-0b741eb6b-00c66575ee')).toBe(false)
})

test('`123e4567-e89b-12d3-a456-42665544000` 是不合格uuid', () => {
  expect(isUUID('123e4567-e89b-12d3-a456-42665544000')).toBe(false)
})

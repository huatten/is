import isJSON from '../../src/type/is-json'

test('`{ }` 是JSON', () => {
  expect(isJSON({})).toBe(true)
})

test("`{name:'KD'}` 是JSON", () => {
  expect(isJSON({ name: 'KD' })).toBe(true)
})

test('`[1,2,3]` 不是JSON', () => {
  expect(isJSON([1, 2, 3])).toBe(false)
})

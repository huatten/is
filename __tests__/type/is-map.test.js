import isMap from '../../src/type/is-map'

test('Map对象是Map', () => {
  expect(isMap(new Map())).toBe(true)
  expect(
    isMap(
      new Map([
        ['key1', 'value1'],
        ['key2', 'value2'],
      ]),
    ),
  ).toBe(true)
})

test('Set对象不是Map', () => {
  expect(isMap(new Set())).toBe(false)
  expect(isMap(new Set([1, 2, 3]))).toBe(false)
})

test('普通对象不是Map', () => {
  expect(isMap({})).toBe(false)
  expect(isMap({ key: 'value' })).toBe(false)
})

test('null不是Map', () => {
  expect(isMap(null)).toBe(false)
})

test('undefined不是Map', () => {
  expect(isMap(undefined)).toBe(false)
})

test('字符串不是Map', () => {
  expect(isMap('map')).toBe(false)
  expect(isMap('')).toBe(false)
})

test('数组不是Map', () => {
  expect(isMap([])).toBe(false)
  expect(isMap([['key', 'value']])).toBe(false)
})

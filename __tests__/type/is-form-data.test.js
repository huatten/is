import isFormData from '../../src/type/is-form-data'

test('FormData对象是FormData', () => {
  expect(isFormData(new FormData())).toBe(true)
  expect(isFormData(new FormData(document.createElement('form')))).toBe(true)
})

test('普通对象不是FormData', () => {
  expect(isFormData({})).toBe(false)
  expect(isFormData({ append: function () {} })).toBe(false)
})

test('null不是FormData', () => {
  expect(isFormData(null)).toBe(false)
})

test('undefined不是FormData', () => {
  expect(isFormData(undefined)).toBe(false)
})

test('字符串不是FormData', () => {
  expect(isFormData('formdata')).toBe(false)
  expect(isFormData('')).toBe(false)
})

test('数组不是FormData', () => {
  expect(isFormData([])).toBe(false)
  expect(isFormData([new FormData()])).toBe(false)
})

test('Blob不是FormData', () => {
  expect(isFormData(new Blob())).toBe(false)
})

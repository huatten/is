import isMimeType from '../../src/regexp/is-mime-type'

test('`text/html` 是有效的MIME类型', () => {
  expect(isMimeType('text/html')).toBe(true)
})

test('`application/json` 是有效的MIME类型', () => {
  expect(isMimeType('application/json')).toBe(true)
})

test('`image/png` 是有效的MIME类型', () => {
  expect(isMimeType('image/png')).toBe(true)
})

test('`invalid/mime` 不是有效的MIME类型', () => {
  expect(isMimeType('invalid/mime')).toBe(false)
})

test('`text_html` 不是有效的MIME类型', () => {
  expect(isMimeType('text_html')).toBe(false)
})

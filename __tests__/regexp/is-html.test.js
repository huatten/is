import isHtml from '../../src/regexp/is-html'

test('`<div>Content</div>` 是HTML片段', () => {
  expect(isHtml('<div>Content</div>')).toBe(true)
})

test('`<br/>` 是HTML片段', () => {
  expect(isHtml('<br/>')).toBe(true)
})

test('`<tag></other>` 不是有效的HTML片段', () => {
  expect(isHtml('<tag></other>')).toBe(false)
})

test('`Just text` 不是HTML片段', () => {
  expect(isHtml('Just text')).toBe(false)
})

import isMagnetURI from '../../src/regexp/is-magnet-uri'

test('有效的磁力链接返回true', () => {
  const validMagnet = 'magnet:?xt=urn:btih:c12a7e7d0f8e4f8e4f8e4f8e4f8e4f8e4f8e4f8e'
  expect(isMagnetURI(validMagnet)).toBe(true)
})

test('`http://example.com` 不是磁力链接', () => {
  expect(isMagnetURI('http://example.com')).toBe(false)
})

test('无效的磁力链接返回false', () => {
  expect(isMagnetURI('magnet:?invalid')).toBe(false)
})

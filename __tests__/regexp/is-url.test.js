import isURL from '../../src/regexp/is-url'

test('`https://beta.theb.ai` 是合格URL', () => {
  expect(isURL('https://beta.theb.ai')).toBe(true)
})

test('`https://www.example.com` 是合格URL', () => {
  expect(isURL('https://www.example.com')).toBe(true)
})

test('`http://www.example.com` 是合格URL', () => {
  expect(isURL('http://www.example.com')).toBe(true)
})

test('`https://www.example.com/page` 是合格URL', () => {
  expect(isURL('https://www.example.com/page')).toBe(true)
})

test('`http://www.example.com/page` 是合格URL', () => {
  expect(isURL('http://www.example.com/page')).toBe(true)
})

test('`www.example.com` 是合格URL', () => {
  expect(isURL('www.example.com')).toBe(true)
})

test('`www.example.com/page` 是合格URL', () => {
  expect(isURL('www.example.com/page')).toBe(true)
})

test('`example.com` 是合格URL', () => {
  expect(isURL('example.com')).toBe(true)
})

test('`12305.456` 不是合格URL', () => {
  expect(isURL('12305.456')).toBe(false)
})

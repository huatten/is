import isEnglish from '../../src/regexp/is-english'

test('`hello world` 是英文', () => {
  expect(isEnglish('hello world')).toBe(true)
})

test('`j12k34` 不是纯英文', () => {
  expect(isEnglish('j12k34')).toBe(false)
})

test('`HH1122GG89I` 不是纯英文', () => {
  expect(isEnglish('HH1122GG89I')).toBe(false)
})

test('`你好` 不是英文', () => {
  expect(isEnglish('你好')).toBe(false)
})

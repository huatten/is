import isPrime from '../../src/number/is-prime'

test('`2` 是质数', () => {
  expect(isPrime(2)).toBe(true)
})

test('`7` 是质数', () => {
  expect(isPrime(7)).toBe(true)
})

test('`11` 是质数', () => {
  expect(isPrime(11)).toBe(true)
})

test('`4` 不是质数', () => {
  expect(isPrime(4)).toBe(false)
})

test('`9` 不是质数', () => {
  expect(isPrime(9)).toBe(false)
})

test('`1` 不是质数', () => {
  expect(isPrime(1)).toBe(false)
})

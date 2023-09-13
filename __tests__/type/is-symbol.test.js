import isSymbol from '../../src/type/is-symbol'

test('`Symbol(123)`是symbol对象', () => {
  expect(isSymbol(Symbol(123))).toBe(true)
})

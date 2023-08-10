import isArguments from '../../src/type/is-arguments'

test('`function() { return arguments; }()`是arguments对象', () => {
  expect(
    isArguments(
      (function () {
        return arguments
      })(),
    ),
  ).toBe(true)
})

test('`[1,2,3]`是arguments对象', () => {
  expect(isArguments([1, 2, 3])).toBe(false)
})

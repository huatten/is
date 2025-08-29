import isSnakeCase from '../../src/regexp/is-snake_case'

test('`snake_case` 是蛇形命名法', () => {
  expect(isSnakeCase('snake_case')).toBe(true)
})

test('`is_snake_case` 是蛇形命名法', () => {
  expect(isSnakeCase('is_snake_case')).toBe(true)
})

test('`snake_case_123` 不是蛇形命名法', () => {
  expect(isSnakeCase('snake_case_123')).toBe(false)
})

test('`Snake_case` 不是蛇形命名法', () => {
  expect(isSnakeCase('Snake_case')).toBe(false)
})

test('`snakeCase` 不是蛇形命名法', () => {
  expect(isSnakeCase('snakeCase')).toBe(false)
})

test('`singleword` 不是蛇形命名法', () => {
  expect(isSnakeCase('singleword')).toBe(false)
})

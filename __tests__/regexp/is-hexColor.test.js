import isHexColor from '../../src/regexp/is-hexColor'

test('`#333` 是十六进制颜色值', () => {
  expect(isHexColor('#333')).toBe(true)
})

test('`#333333` 是十六进制颜色值', () => {
  expect(isHexColor('#333333')).toBe(true)
})

test('`#f90fff23` 是十六进制颜色值', () => {
  expect(isHexColor('#f90fff23')).toBe(true)
})

test('`#f90fff23f` 不是十六进制颜色值', () => {
  expect(isHexColor('#f90fff23f')).toBe(false)
})

test('`rgb(255, 0, 0)` 不是十六进制颜色值', () => {
  expect(isHexColor('rgb(255, 0, 0)')).toBe(false)
})

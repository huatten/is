import isWindowsTablet from '../../src/env/is-windows-tablet'

test('在Windows平板环境中返回正确的结果', () => {
  // 注意：实际的测试结果取决于运行环境
  // 在Node.js环境中通常返回false
  expect(isWindowsTablet()).toBe(false)
})

import isDesktop from '../../src/env/is-desktop'

test('在桌面环境中返回正确的结果', () => {
  // 注意：实际的测试结果取决于运行环境
  // 在Node.js环境中通常返回true（因为既不是移动设备也不是平板）
  expect(isDesktop()).toBe(true)
})

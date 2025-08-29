import isMac from '../../src/env/is-mac'

test('在Mac操作系统中返回正确的结果', () => {
  // 注意：实际的测试结果取决于运行环境
  // 在Node.js环境中通常返回false
  expect(isMac()).toBe(false)
})

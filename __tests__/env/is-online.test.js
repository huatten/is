import isOnline from '../../src/env/is-online'

test('在在线环境中返回正确的结果', () => {
  // 注意：实际的测试结果取决于运行环境
  // 在Node.js环境中通常返回true
  expect(isOnline()).toBe(true)
})

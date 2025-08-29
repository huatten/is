import isIphone from '../../src/env/is-iphone'

test('在iPhone环境中返回正确的结果', () => {
  // 注意：实际的测试结果取决于运行环境
  // 在Node.js环境中通常返回false
  expect(isIphone()).toBe(false)
})

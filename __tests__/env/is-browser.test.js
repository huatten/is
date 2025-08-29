import isBrowser from '../../src/env/is-browser'

test('在浏览器环境中返回true', () => {
  // 在浏览器环境中，window和navigator对象应该存在
  expect(typeof window !== 'undefined' && typeof navigator !== 'undefined').toBe(true)
  // 注意：实际的测试结果取决于运行环境
  expect(isBrowser()).toBe(typeof window !== 'undefined' && typeof navigator !== 'undefined')
})

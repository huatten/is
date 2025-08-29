import isNode from '../../src/env/is-node'

test('在Node.js环境中返回true', () => {
  // 在Node.js环境中，process对象应该存在且window对象应该不存在
  expect(isNode()).toBe(typeof process !== 'undefined' && typeof window === 'undefined')
})

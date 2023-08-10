/**
 * https://github.com/AlloyTeam/eslint-config-alloy
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: ['alloy'],
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
  },
  rules: {
    // 自定义你的规则
  },
}

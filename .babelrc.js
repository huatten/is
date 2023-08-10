module.exports = function (api) {
  const testEnv = api.env('test') // Jest default environment variables is `test` @see https://jestjs.io/zh-Hans/docs/environment-variables
  /**
   * @description how to support ESM in Jest
   * @see https://juejin.cn/post/6999572866815492110
   * @type {{presets: [string,{targets: {node: string}}][]}}
   */
  const test = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: { node: 'current' },
        },
      ],
    ],
  }

  const dom = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          shippedProposals: true,
          corejs: {
            version: '3.32',
            proposals: true,
          },
        },
      ],
    ],
  }

  let config = testEnv ? test : dom
  return config
}

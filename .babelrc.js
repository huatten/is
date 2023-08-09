module.exports = {
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
    '@babel/preset-typescript',
  ],
}

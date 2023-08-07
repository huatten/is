module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
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

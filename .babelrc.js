module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    ['module-resolver', {
      alias: {
        'package.json': './package.json',
        test: './test'
      },
      "extensions": [".js"],
      root: ['./src']
    }],
  ],
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: true
      }
    }]
  ]
};

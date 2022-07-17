/** @type {import('webpack')} */
let path = require('path');
module.exports = {
  entry: {
    main: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path:path.resolve(__dirname, './dist')
  }
}
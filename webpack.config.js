const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, ''),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  }
};

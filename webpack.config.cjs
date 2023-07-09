/* eslint-disable */

const path = require('path');
// import path from 'path'

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],              
              ['@babel/preset-react'],
              ['@babel/preset-typescript']              
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'              
            ]
          }
        }
      },
    ]
  }
};
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')

  },
  devServer: {
    static: './dist'
  },
  module: {
    rules: [{
      test: /(\.s[ac]ss|css)$/i,
      use: ['style-loader',
        'css-loader',
        'sass-loader']
    },
    {
      test: /\.?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript']
        }
      }
    },
    {
      test: /\.(ts)x?/i,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    },
    {
      test: /\.(jpe?g|png|pdf|gif|svg)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.?html$/i,
      exclude: /node_modules/,
      loader: 'html-loader'
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'base-react-typescript',
      filename: './index.html',
      template: 'static/index.html'
    })
  ]
}

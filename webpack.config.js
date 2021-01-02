const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './client/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    port: 8080,
    hot: true,
    open: true,
    inline: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
        secure: false,
        bypass: (req, res, proxyOptions) => {
          if (req.headers.accept.indexOf('html') !== -1) {
            // console.log('Skipping proxy for browser request.');
            return '/index.html';
          }
        },
      },
    },
  },
  plugins: [
    new HtmlWepackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // CSS, PostCSS and Sass
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        // removed style-loader, not required in production.
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        // Fonts and SVGs
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
};

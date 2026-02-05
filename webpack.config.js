const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js',
    clean: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ttf|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash:8][ext]'
        }
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: { comments: false },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: { 
          test: /[\\/]node_modules[\\/]/, 
          name: 'vendors',
          enforce: true 
        }
      }
    }
  },
  devServer: {
    static: './dist',
  },
};

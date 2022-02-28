import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.([jt]sx?)?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8000,
    hot: true,
  },
};

export default config;

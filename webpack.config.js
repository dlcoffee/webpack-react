var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');


const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const common = {
  entry: PATHS.app,

  // '' is needed to allow imports without an extension
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlwebpackPlugin({
      appMountId: 'app',
      template: 'node_modules/html-webpack-template/index.html',
      title: 'Kanban app',
    })
  ],

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app,
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app,
      }
    ]
  }
};

// Default config
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce amount of output.
      stats: 'errors-only',

      // parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
const webpack = require('webpack'),
      path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: [
    "./index"
  ],
  output: {
      path: path.join(__dirname, "/assets"),
      publicPath: '/assets/',
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, "/src")
      },
      {
        test:   /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus?resolve url')
      },
      {
        test:   /\.(png|jpg?g|gif|svg|ttf|eot|woff|woff2)$/,
        loaders: [
          'file?name=/assets/img/[name].[ext]?[hash]',
          //'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: function () {
    return [require('autoprefixer')];
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  }
};

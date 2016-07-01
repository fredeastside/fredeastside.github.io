const NODE_ENV = process.env.NODE_ENV || 'development',
      webpack = require('webpack'),
      path = require('path');

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: [
    "./index"
  ],
  output: {
      path: path.join(__dirname, "/dist"),
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
        loader: 'style!css!postcss!stylus?resolve url'
      }, {
        test:   /\.(png|jpg?g|gif|svg|ttf|eot|woff|woff2)$/,
        loaders: [
          'file?name=[path][name].[ext]?[hash]',
        ]
      }
    ]
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  ]
};

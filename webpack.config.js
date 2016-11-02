const webpack = require('webpack'),
      path = require('path');


module.exports = {
  context: path.join(__dirname, "/src"),
  entry: [
    "./index"
  ],
  /*
  несколько точек входа
  enrty: {
    home: "home",
    about: "about",
  }
  */
  output: {
      path: path.join(__dirname, "/dist"),
      publicPath: '/assets/',
      //filename: "bundle.[chunkhash].js" // filename: "[name].js" несколько точек входа
      filename: "bundle.js" // filename: "[name].js" несколько точек входа
      // chunkFilename: "[id].[chunkhash].js"
      // library: "[name]" // глобальные переменные
  },
  /*
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  // cdn
  externals: {
    lodash: "_"
  },
  devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : null
  //"cheap-inline-module-source-map" or "eval" in dev, "source-map" in prod
  */
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        //exclude: /node_modules/,
        include: path.join(__dirname, "/src")
      },
      {
        test:   /\.styl$/,
        loader: 'style!css!postcss!stylus?resolve url'
      }, {
        test:   /\.(png|jpg?g|gif|svg|ttf|eot|woff|woff2)$/,
        loaders: [
          'file?name=[path][name].[ext]?[hash]',
          //'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
    // noParse:
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
    new webpack.NoErrorsPlugin() // не пересобирать js если возникли ошибки
    /*,
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    })*/
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  }
};

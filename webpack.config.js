const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin')

module.exports = {
  entry: ['whatwg-fetch','./client/app.js'],
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.*css$/,
        loader: ExtractTextPlugin.extract('css!sass', { publicPath: '../'})
      },
      {
           test: /\.(eot|svg|ttf|woff|woff2)$/,
           loader: 'file?name=build/fonts/[name].[ext]'
       }
    ]
  },
  devtool: 'source-map',
  sassLoader: {
   includePaths: [path.resolve(__dirname, "client/lib/sass")]
 },
 plugins: [
   new ExtractTextPlugin('style.bundle.css', {
       allChunks: true
   }),
  //  new WebpackUglifyJsPlugin({
  //    cacheFolder: 'cache',
  //    debug: false,
  //    minimize: true,
  //    sourceMap: false,
  //    output: {
  //      comments: false
  //    },
  //    compressor: {
  //      warnings: false
  //    }
  //  })
 ],
  output: {
    path: './build',
    filename: 'app.bundle.js'
  }
}

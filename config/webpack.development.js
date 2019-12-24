const path = require('path')
const apiMocker = require('mocker-api')
const webpack = require('webpack') //eslint-disable-line
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin') //eslint-disable-line

module.exports = () => {
  return {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, '/public/'),
      hot: true,
      before: function(app){
        apiMocker(app, path.resolve('./mocker/index.js'))
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ErrorOverlayPlugin(),
    ],
  }
}

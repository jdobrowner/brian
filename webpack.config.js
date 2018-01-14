var path = require('path');
var webpack = require('webpack');

plugins = [];
// plugins.push(new webpack.optimize.UglifyJsPlugin());
// plugins.push(new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }));

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    { test: /\.(jpe?g|png|pdf|svg)$/, loader: "file"}
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: { index: '200.html' },
    contentBase: 'build'
  }
};

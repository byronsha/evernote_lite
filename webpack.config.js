var path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/entry.js',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

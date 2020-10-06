






let path = require('path');
//bundle.js will be create by below file???
module.exports = {
  entry: '/Users/jamesstockman/videoHeader/client/src/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  modules: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }]
  }
};
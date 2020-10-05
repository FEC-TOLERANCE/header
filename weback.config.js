let path = require('path');
//bundle.js will be create by below file???
module.exports = {
  entry: '/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  modules: {
    rules: [{
      test: /\.js?$/,
      exclude: '/node_modules/',
      use: {
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }]
  }
}
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

// Базовая конфигурация
module.exports = {
  entry: './src/index.js', // главный файл
  output: { // выходные данные
    filename: "bundle.js", // имя файла
    path: path.resolve(__dirname, 'dist') // куда сложить данные
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}

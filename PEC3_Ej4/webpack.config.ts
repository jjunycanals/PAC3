
import * as path from 'path';

module.exports = {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    alisa: {
      pods: path.resolve(__dirname, "./src/pods/"),
      views: path.resolve(__dirname, "./src/views/"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      services: path.resolve(__dirname, "./src/services"),
      validators: path.resolve(__dirname, "./src/validators"),
      constants: path.resolve(__dirname, "./src/constants")
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    publicPath: 'dist',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

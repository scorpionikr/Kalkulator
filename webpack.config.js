const path = require("path");
const entryFile = "index.js";

module.exports = {
  entry: ["whatwg-fetch", `./js/${entryFile}`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `build/`)
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|gif|jpg|png|svg|pdf|wav|mp3)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "files/",
          outputPath: "../files/"
        }
      }
    ]
  }

};

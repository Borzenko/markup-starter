const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
   const isDevelopment = env.mode === 'development';
   return {
      entry: {
         bundle: './src/scripts/app.js'
      },
      mode: env.mode,
      output: {
         path: path.resolve(__dirname, '../dist')
      },
      devtool: isDevelopment && "source-map",
      devServer: {
         port: 3000,
         open: true,
      },
      module: {
         rules: [{
               test: /\.js$/,
               loader: 'buble-loader',
               include: path.join(__dirname, 'src'),
               options: {
                  objectAssign: 'Object.assign'
               }
            },
            {
               test: /\.(scss|css)$/,
               use: [
                  MiniCssExtractPlugin.loader,
                  {
                     loader: "css-loader",
                     options: {
                        sourceMap: isDevelopment,
                     },
                  },
                  {
                     loader: "sass-loader",
                     options: {
                        sourceMap: isDevelopment,
                     },
                  }
               ]
            },
            {
               test: /\.(jpg|png|gif)$/,
               use: [{
                     loader: "file-loader",
                     options: {
                        name: '[name].[ext]',
                        outputPath: 'static/',
                        useRelativePath: true,
                     }
                  },
                  {
                     loader: 'image-webpack-loader',
                     options: {
                        mozjpeg: {
                           progressive: true,
                           quality: 65
                        },
                        optipng: {
                           enabled: true,
                        },
                        pngquant: {
                           quality: '65-90',
                           speed: 4
                        },
                        gifsicle: {
                           interlaced: false,
                        },
                        webp: {
                           quality: 75
                        }
                     }
                  }
               ]
            }
         ]
      },
      plugins: [
         new MiniCssExtractPlugin({
            filename: "[name]-styles.css",
            chunkFilename: "[id].css"
         }),

         new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/index.html',
            minify: !isDevelopment && {
               html5: true,
               collapseWhitespace: true,
               caseSensitive: true,
               removeComments: true,
               removeEmptyElements: true
            },

         })
      ]
   };
};

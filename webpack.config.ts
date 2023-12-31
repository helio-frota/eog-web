import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfig } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';

type Configuration = WebpackConfig & { devServer?: WebpackDevServerConfig; }

const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, 
  },
  entry: './src/index.tsx',
  module: {
    rules: [ 
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  devtool: 'inline-source-map',
};

export default config;

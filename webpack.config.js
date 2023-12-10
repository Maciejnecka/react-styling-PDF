/* eslint-disable no-undef */
/* eslint-disable func-names */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function (env = {}) {
    const { production: isProd = false } = env;
    // eslint-disable-next-line no-console
    console.log(env);

    return {
        entry: './src/app.js',
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.min.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !isProd,
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            }),
            new ESLintPlugin(),
        ],
    };
};

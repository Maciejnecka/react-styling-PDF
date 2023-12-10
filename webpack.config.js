/* eslint-disable no-undef */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable func-names */
const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// importuję odpowiedni plugin

module.exports = function (env = {}) {
    const { production: isProd = false } = env;
    // eslint-disable-next-line
    console.log(env);

    return {
        entry: './src/app.js',
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'source-map',
    };
};

module.exports = {
    entry: './src/app.js',
    // definiuje plik wejściowy
    mode: 'development',
    // definiuję tryb działania
    output: {
        path: path.resolve(__dirname, 'build'),
        // definiuje ścieżką wyjściową
        filename: 'app.min.js',
        // definiuję nazwę pliku wyjściowego
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // określam jakie pliki
                // będą brane pod uwagę
                exclude: /node_modules/,
                // określam wykluczenia
                use: 'babel-loader',
                // określam jaki [loader]
                // ma być wykorzystany
            },
            {
                test: /\.css$/,
                // tylko pliki z rozszerzeniem .css
                exclude: /node_modules/,
                // wykluczam pliki zawierajace
                // wpisany ciag znakow w sciezce
                use: ['style-loader', 'css-loader'],
                // okreslam kolejnosc wykorzystanych
                // loaderow, tj. od lewej do prawej.
            },
            {
                test: /\.scss$/,
                // tylko pliki z rozszerzeniem .scss
                use: [
                    isProd ? CssWebpackPlugin.loader : 'style-loader',
                    // 'css-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isProd ? false : true,
                        },
                    },
                    // 'sass-loader'
                    // ...
                ],
            },
        ],
        // obecnie brak dodatkowych ustawień
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // wskazuje plik źródłowy
            filename: 'index.html',
            // określan nazwę dla pliku
        }),
        new ESLintPlugin(),
    ],
};
// eksportuję ustawienia dla webpack-a

const path = require("path")

const DashboardPlugin = require('webpack-dashboard/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/ts/index.ts",
    target: 'es5',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                // To load .css files
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader, // To extract the css to separate file use this
                    'css-loader',
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // "style-loader", // To bundle the javascript and the css together
                    MiniCssExtractPlugin.loader, // To extract the css to separate file use this
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },

            /**
             * If you use javascript in your project use babel to load the javascript
             * and compile it into compatible js file "@babel/preset-env",
             */
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader'
            //     }
            // }

            /**
             * If you want use babel with typescript use the following config and change the
             * entry point to point to typescript file and change the babel.config.json file
             * preset to "@babel/preset-typescript"
             */
            {
                test: /\.m?ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }

            /**
             * If you use typescript and want to compile it without using babeluse the following config
             * and change the entry point to typescript file
             */
            // {
            //     test: /\.ts$/,
            //     use: [
            //         "ts-loader"
            //     ],
            //     exclude: /node_modules/,
            // }
        ]
    },
    plugins: [
        new DashboardPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        // minimizer: [
        //     new CssMinimizerPlugin(),
        // ],
    }
}
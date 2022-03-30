const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: [
            path.resolve(__dirname, 'resources/js/app.js'),
            path.resolve(__dirname, 'resources/sass/app.scss')
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'script-loader'
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader',
                    },
                    {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    },

                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/[name].js",
        clean: true,
    },
    plugins: [
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ]
}
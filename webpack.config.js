const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extracts css from the bundle.js file

module.exports={
    // main file
    entry: './src/index.js',

    // result files after compilation are saved in bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    // extentions used in the project
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                //regular expression for identify the extensions used in the project
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                
                //loader used to load
                use:{
                    loader: "babel-loader"
                }
            },
            {
                //regular expression for identify the html extension
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },

            {
                test: /\.(s*)css$/,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    },
                ]
            },


        ]
    },
    devServer: {
        historyApiFallback: true,
    },

    //plugins needed
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
    ]
};
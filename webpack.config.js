const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss|css$/i,
                exclude: /node_modules/,
                use: [                
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    entry: './static/app.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname,'production')
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
}

    /*
    ,
    entry: {
        'JavaScript.js':'./static/javascript.js',
        'CSS.css':'./static/style.css'
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname,'production')
    }*/
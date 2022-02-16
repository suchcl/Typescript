const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "app": "./src/index.ts"
    },
    output: {
        // filename: "[name].[chunkhash:8].js"
        filename: "app.js" // 目录默认为dist
    },
    resolve:{
        extensions:[".js",".ts",".ts",".tsx"]
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/i,
                use:[
                    {
                        loader: "ts-loader"
                    }
                ],
                exclude: "/node_modules/"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/tpl/index.html"
        })
    ],
    optimization:{
        splitChunks:{
            chunks: "all"
        }
    }
};
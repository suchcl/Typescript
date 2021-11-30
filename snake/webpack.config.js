const path = require("path");
// 导入html-webpack-plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false, // webpack打包，不要使用箭头函数形式
            const: false
        }
        // clean: true
    },

    // 指定webpack打包时用到的模块
    module: {
        // 指定加载规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                use: [
                    // 指定加载器有两种形式，一种是字符串，一种是对象，都可以
                    // 加载器的执行顺序，从后往前执行，配置在最后面的最先执行
                    // 配置babel加载器
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 设置要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88", //兼容chrome的88版本
                                            "ie": "9"
                                        },
                                        // 指定core-js版本
                                        "corejs": "3",
                                        // 使用core-js的方式，usage表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                // 要排除的文件
                exclude: "/node_modules/"
            },
            {
                // 设置less的处理
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 配置插件
    plugins:[
         // 配置清理插件，在build之前先清空output目录
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: "自定义页面title", // 定义生成页面的title
            // filename: "main.html" // 定义生成的html页面的文件名
            template: "./public/index.html" // 指定模板文件
        })
    ],
    resolve:{
        extensions:[".ts",".js",".css",".less"]
    }
};
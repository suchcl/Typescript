const path = require("path");
// 导入html-webpack-plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
        // clean: true
    },

    // 指定webpack打包时用到的模块
    module: {
        // 指定加载规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                use: "ts-loader",
                // 要排除的文件
                exclude: "/node_modules/"
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
        extensions:[".ts",".js",".css"]
    }
};
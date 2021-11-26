const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
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
    }
};
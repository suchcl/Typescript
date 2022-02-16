module.exports = {
    // cheap: 忽略列信息  module：会找到ts源码，而不是编译后的js代码
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8080
    }
};
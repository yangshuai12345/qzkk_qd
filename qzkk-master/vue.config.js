
module.exports = {
    publicPath: './',
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        proxy: {//配置跨域
            '/api': {
                target: 'http://192.168.43.50:8080' ,//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
        }
    }
}
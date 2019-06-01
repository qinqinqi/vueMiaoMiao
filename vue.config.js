// export default是es6的写法,在这里不支持
module.exports = {
    // 配置开发环境
    devServer : {
        proxy : {
            //接口是api
            '/api':{
                //代理目标
                target:'http://39.97.33.178',
                //反向代理时是否改变地址
                changeOrigin:true
            }
        }
    }
}
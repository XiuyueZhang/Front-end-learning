// 添加自定义webpack配置
const path= require('path')

module.exports = {
    webpack:{
        alias:{
            // 约定：用@表示src文件所在路径
            '@':path.resolve(__dirname,'src')
        }
    }
}
module.exports = {
    entry:{
        home:'./a.js',  //入口文件地址  多个参数用对象形式
        base:'b.js',
    },
    output:{
        filename:'[name].pack.js', //出口文件名
        path:__dirname+'/dist'   //路径__dirname指当前目录下的文件
    }
}
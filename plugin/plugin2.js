class MyPlugin {
    constructor(options) {
        this.options = options
        this.externalModules = {}
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('CodeBeautify', (compilation, callback)=> {
            Object.keys(compilation.assets).forEach((data)=> {
                let content = compilation.assets[data].source() // 欲处理的文本
                content = '/* plugin2 add this */' + content;
                compilation.assets[data] = {
                    source(){
                        return content
                    },
                    size(){
                        return content.length
                    }
                }
            })
            callback();
        })
    }
}
module.exports = MyPlugin;
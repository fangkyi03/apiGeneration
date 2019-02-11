# apiGeneration
爬取接口数据 并且转换成本地的js文件 进行接口补全

# 示例代码
```javascript
const api = require('apibuildtool')

api.init(__dirname + '/demo.js')

/**
 * 初始化获取网络请求数据
 * 
 * @param {any}  
 */
function getInitalNetWorkData() {
    const data = require('./api.json')
    // 这里使用模拟的api接口数据来实现 如果你想要自己的swagger生成接口说明的话 
    // 只需要这边改成对应的axios将返回的数据结构化即可
    const pathsKeys = Object.keys(data.paths)
    pathsKeys.forEach((ea) => {
        const methodKeys = Object.keys(data.paths[ea])
        methodKeys.forEach((eb) => {
            const select = data.paths[ea][eb]
            api.createApiTarget(select.tags[0])
            api.createApiChildren(select.tags[0], {
                url: ea,
                isUrl: false,
                name: select.operationId + '_' + eb.toUpperCase(),
                params: {},
                method: eb.toUpperCase(),
                description:select.description
            })
        })
    })
    api.build()
}

getInitalNetWorkData()
```
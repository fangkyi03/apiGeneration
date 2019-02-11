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

# 使用例子
```javascript
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import api from '../../command/api';
import { connect } from '@tarojs/redux';

@connect(({Index})=>({Index}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { 
    api.send(this,[
      // onCallBack onError,tranData 都不是必须项 可以根据自己的条件选择
      api.pet('Index').addPet_POST({a:1})({
        // 单条网络请求成功回调
        // 符合成功的要求可以在app.js的onGLNetStart中自行设置符合条件
        onCallBack:({retData})=>{
        },
        // 单条网络请求的错误处理
        // 如果这个网络请求不符合onGLNetStart的条件就会进入这里
        // 当你这边写了onError以后 全局统一的那个错误处理将不会被使用
        // 情况特殊的时候 如删除等 你可以直接在onError中return 这种方式也会帮助你刷新model
        onError:({retData})=>{

        },
        // 单条网络请求数据转换的地方
        // 如果你想对数据进行转换 可以写在这里 因为在send里面可以同时写多个接口请求
        // 每个接口请求可以绑定同一个model 那么这样的话 接口返回的结构有可能都是data这样的
        // 那么同一个model中字段就会重名 所以你可以在这边重命名一下
        // 或者是后台返回的数据结构不符合实际需求的时候 这边需要重构一下的 也可以在这里写
        tranData:({data})=>{

        }
      })
    ])
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
```
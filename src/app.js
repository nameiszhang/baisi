import {Provider} from '@tarojs/redux'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import store from './store/store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/elite/elite',
      'pages/newest/newest',
      'pages/attention/attention',
      'pages/mine/mine',
      'pages/pinglun/pinglun',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color:'#333',
      selectedColor:'#ccc',
      list: [{
        pagePath: 'pages/elite/elite',
        text: "全部",
        iconPath: './img/elite.png',
        selectedIconPath: './img/elite1.png',
      }, {
        pagePath: 'pages/newest/newest',
        text: "推荐",
        iconPath: './img/newest.png',
        selectedIconPath: './img/newest1.png',
      },{
        pagePath: 'pages/attention/attention',
        text: "关注",
        iconPath: './img/attention.png',
        selectedIconPath: './img/attention1.png',
      }, {
        pagePath: 'pages/mine/mine',
        text: "我的",
        iconPath: './img/mine.png',
        selectedIconPath: './img/mine1.png',
      }]
    },
    
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))

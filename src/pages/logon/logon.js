import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './logon.scss'

export default class Logon extends Component {

    config = {
        navigationBarTitleText: '登录'
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
        <View className='logon'>
            <Button>登录</Button>
        </View>
        )
    }
}

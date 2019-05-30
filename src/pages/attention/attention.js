import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './attention.scss'

export default class Attention extends Component {

    config = {
        navigationBarTitleText: '关注'
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
        <View className='attention'>
            <Image src='http://localhost:3000/images/关注page.png'></Image>
            <Navigator url='/pages/logon/logon'>
                <Button>立即登录/注册</Button>
            </Navigator>
        </View>
        )
    }
}

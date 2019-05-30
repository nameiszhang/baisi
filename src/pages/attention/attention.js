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
            <View>
                <Image src='http://localhost:3000/images/关注page.png'></Image>
            </View>
            <View className='text'>
                 <View>快快登录吧，关注百思最in牛人</View>
                <View>好友动态让你过把瘾儿~</View>
                <View>欧耶~~~</View>
            </View>
            <View>
                <Navigator url='/pages/logon/logon'>
                    <Button>立即登录/注册</Button>
                </Navigator>
            </View>
            
        </View>
        )
    }
}

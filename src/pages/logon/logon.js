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
            <View>
                <Input placeholder='输入用户名'/>
                <Input placeholder='请输入密码'/>
            </View>
            <View>
                <Navigator url='/pages/mine/mine'>
                    <Button>登录</Button>
                </Navigator>
            </View>
            <View>
                <Text>立即注册</Text>
                <Text>忘记密码</Text>
            </View>
        </View>
        )
    }
}

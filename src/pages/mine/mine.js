import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './mine.scss'

export default class Mine extends Component {

    config = {
        navigationBarTitleText: '我的'
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
        <View className='mine'>
            <Text>mine</Text>
        </View>
        )
    }
}
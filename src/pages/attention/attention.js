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
            <Text>attention</Text>
        </View>
        )
    }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './mine.scss'

export default class Mine extends Component {

    config = {
        navigationBarTitleText: '我的'
    }
    constructor(){
        this.state={
            minedata:[]
        }
    }
    componentWillMount () { }

    componentDidMount () {
        wx.request({
            url: 'http://api.budejie.com/api/api_open.php?a=square&c=topic',
            success: (res)=>{
                this.setState({
                    minedata:res.data.square_list
                })
            },
            fail: ()=>{},
            complete: ()=>{}
        });
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {minedata}=this.state
        return (
        <View className='mine'>
            <Navigator className='route' url='/pages/logon/logon'>
                <View className='one'>
                    <Image src='http://localhost:3000/images/denglu.png'></Image>
                    <Text>登录/注册</Text>
                </View>
                <View>></View>
            </Navigator>
            
            <View className='route'>
                <View className='one'>离线下载</View>
                <View>></View>
            </View>
            <View className='list'>
                {
                    minedata.map((item)=>(
                        <View key={item.id} className='li'>
                            <Image src={item.icon}></Image>
                            <View>{item.name}</View>
                        </View>
                    ))
                }
            </View>
        </View>
        )
    }
}
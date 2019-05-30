import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './pinglun.scss'

import {connect} from '@tarojs/redux'
import {bindActionCreators} from 'redux'
import * as IndexAction from '../../store/index/action'

class Pinglun extends Component {

    config = {
        navigationBarTitleText: '评论'
    }

    constructor(){
        this.state={
            data:[]
        }
    }
    componentWillMount () { }

    componentDidMount () {
        // console.log(this.props.id)
        wx.request({
            url: `http://api.budejie.com/api/api_open.php?a=dataList&c=comment&data_id=${this.props.id}&hot=1`,
            success: (res)=>{
                this.setState({
                    data:res.data.data
                })
                console.log(res.data.data)
            }
        });
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {data}=this.props
        return (
        <View className='pinglun'>
            <View>最新评论</View>
            {
                data.map((item)=>(
                    <View key={item.id} className='userCont'>
                        <View className='one'>
                            <Image src={item.user.profile_image}></Image>
                            <Text className='flex'>{item.user.username}</Text>
                            <View><Image src='http://localhost:3000/images/ding.png'/></View>
                        </View>
                        <View>
                            <View className='like_count'>{item.like_count}</View>
                            <View className='flex'>{item.content}</View>
                        </View>
                    </View>
                ))
            }
        </View>
        )
    }
}

let mapState = state => state.IndexStore
let mapDispatch = dispatch => bindActionCreators(IndexAction, dispatch)
export default connect(mapState, mapDispatch)(Pinglun)
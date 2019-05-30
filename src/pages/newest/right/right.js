import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './newest.scss'


import {connect} from '@tarojs/redux'
import {bindActionCreators} from 'redux'
import * as IndexAction from '../../../store/index/action'
class Right extends Component {

    config = {
        navigationBarTitleText: '最新'
    }
    constructor(){
        this.state={
            right:[]
        }
    }
    componentWillMount () { }

    componentDidMount () {
        console.log(this.props.listId)
        wx.request({
            url: `http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=${this.props.listId}`,
            success: (res)=>{
                this.setState({
                    right:res.data.list
                })
            },
        });
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {right}=this.state
        console.log(this.props.listId)
        return (
        <View className='right'>
        {
            right.map((item)=>(
                <View key={item.id} className='rightItem'>
                    <Image src={item.header}></Image>
                    <View className='rightName'>
                        <View>{item.screen_name}</View>
                        <Text>{item.tiezi_count}人关注</Text>
                    </View>
                    <View className='GZ'>+关注</View>
                </View>  
            ))
        }
        </View>
        )
    }
}

let mapState = state => state.IndexStore
let mapDispatch = dispatch => bindActionCreators(IndexAction, dispatch)
export default connect(mapState, mapDispatch)(Right)
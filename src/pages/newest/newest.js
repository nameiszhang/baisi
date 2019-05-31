import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './newest.scss'


import {connect} from '@tarojs/redux'
import {bindActionCreators} from 'redux'
import * as IndexAction from '../../store/index/action'


class Newest extends Component {

    config = {
        navigationBarTitleText: '最新'
    }
    constructor(){
        this.state={
            left:[],
            // right: [],
            listId:5
        }
    }
    componentWillMount () { }

    componentDidMount () {
        wx.request({
            url: 'http://api.budejie.com/api/api_open.php?a=category&c=subscribe',
            success: (res)=>{
                this.setState({
                    left:res.data.list
                })
            },
        });
        this.props.newsetData()

        // wx.request({
        //     url: `http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=${this.state.listId}`,
        //     success: (res)=>{
        //         this.setState({
        //             right:res.data.list
        //         })
        //     },
        // });
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {left,right,listId} = this.state
        let {changeRight,rightdata,GZ}=this.props
        return (
        <View className='newest'>
            <View id='left'>
                <View className='left'>
                    {
                        left.map((item)=>(
                            <View className={listId===item.id ? 'active' : ''}
                            key={item.id}
                            onClick={()=>{
                                this.setState({
                                  listId: item.id
                                })
                                changeRight(item.id)
                                // this.changeRight(item.id)
                            }}>{item.name}</View> 
                        ))
                    }
                </View>
            </View>
            <View id='right'>
                <View className='right'>
                {
                    rightdata && rightdata.map((item,key) => (
                        <View key={item.id} className='rightItem'>
                            <Image src={item.header}></Image>
                            <View className='rightName'>
                                <View>{item.screen_name}</View>
                                <Text>{item.fans_count}人关注</Text>
                            </View>
                            <View className='GZ' onClick={()=>{
                                GZ(key)
                                this.forceUpdate()
                            }}>{item.is_vip ? '已关注' : '+关注'}</View>
                        </View>  
                    ))
                }
                </View>
            </View>
        </View>
        )
    }
}

let mapState = state => state.IndexStore
let mapDispatch = dispatch => bindActionCreators(IndexAction, dispatch)
export default connect(mapState, mapDispatch)(Newest)
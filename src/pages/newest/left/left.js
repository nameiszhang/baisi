import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './left.scss'

import {connect} from '@tarojs/redux'
import {bindActionCreators} from 'redux'
import * as IndexAction from '../../../store/index/action'

class Left extends Component {

    config = {
        navigationBarTitleText: '最新'
    }
    constructor(){
        this.state={
            left:[],
            id:0
        }
    }
    componentWillMount () { }

    componentDidMount () {
        wx.request({
            url: 'http://api.budejie.com/api/api_open.php?a=category&c=subscribe',
            success: (res)=>{
                this.setState({
                    left:res.data.list,
                    id:res.data.list[0].id
                })
            },
        });
    }

    componentWillUnmount() {
      this.props.changeList()
    }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {left,id} = this.state
        let {changeList}=this.props
        return (
        <View className='left'>
            {
                left.map((item)=>(
                    <View className={id===item.id ? 'active' : ''}
                     key={item.id}
                     onClick={()=>{
                        this.setState({id:item.id})
                        changeList(item.id)
                    }}>{item.name}</View> 
                ))
            }
        </View>
        )
    }
}

let mapState = state => state.IndexStore
let mapDispatch = dispatch => bindActionCreators(IndexAction, dispatch)
export default connect(mapState, mapDispatch)(Left)
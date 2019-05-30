import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './newest.scss'


export default class Newest extends Component {

    config = {
        navigationBarTitleText: '最新'
    }
    constructor(){
        this.state={
            left:[],
            right: [],
            listId:0
        }
    }
    componentWillMount () { }

    componentDidMount () {
        wx.request({
            url: 'http://api.budejie.com/api/api_open.php?a=category&c=subscribe',
            success: (res)=>{
                this.setState({
                    left:res.data.list,
                    listId:res.data.list[0].listId
                })
            },
        });

        wx.request({
            url: `http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=${this.state.listId}`,
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
        let {left,right,listId} = this.state
        return (
        <View className='newest'>
            <View id='left'>
                <View className='left'>
                    {
                        left.map((item)=>(
                            <View className={listId===item.id ? 'active' : ''}
                            key={item.id}
                            onClick={()=>{
                                this.changeRight(item.id)
                            }}>{item.name}</View> 
                        ))
                    }
                </View>
            </View>
            <View id='right'>
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
            </View>
        </View>
        )
    }
    changeRight=(id)=>{
        this.setState({
          listId: id
        })
        wx.request({
            url: `http://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=${this.state.listId}`,
            success: (res)=>{
                this.setState({
                    right:res.data.list
                })
            },
        });
    }
}
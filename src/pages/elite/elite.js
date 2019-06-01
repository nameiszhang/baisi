import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './elite.scss'

import {connect} from '@tarojs/redux'
import {bindActionCreators} from 'redux'
import * as IndexAction from '../../store/index/action'

class Elite extends Component {

    config = {
        navigationBarTitleText: '精华'
    }
    constructor(){
        this.state={
            data:[],
            tabList:[{
              name: '全部',
              type: 1,
            }, {
              name: '视频',
              type: 41,
            }, {
              name: '图片',
              type: 10,
            }, {
              name: '段子',
              type: 29,
            }, {
              name: '声音',
              type: 31,
            }],
            type:1,
            scrollTop:0
        }
    }

    componentWillMount () { }

    componentDidMount () {
        wx.request({
            url: `https://api.budejie.com/api/api_open.php?a=list&c=data&type=1`,
            success: (result)=>{
                this.setState({
                    data:result.data.list
                })
                console.log(result.data.list)
            }
        });
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {type,data,tabList}=this.state
        let {changeId}=this.props
        return (
        <View className='elite'>
            <View className='head'>
            {
                tabList.map((item,key)=>(
                    <Text className={type===item.type ? 'active' : ''} key={key} onClick={()=>{
                        this.changType(item.type)
                    }}>{item.name}</Text>
                ))
            }
            </View>
            <ScrollView className='common' scrollY>
                {
                    data.map((item)=>(
                        <View key={item.id} className='item'>
                            <View className='profile'>
                                <Image src={item.profile_image}></Image>
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.create_time}</Text>
                                </View>
                            </View>
                            {
                                type===1 && <View className='cont'>
                                    <View>{item.text}</View>
                                    {
                                        item.videouri ? <Video
                                                controls
                                                poster={item.bimageuri}
                                                style={{height:item.height+'rpx'}} 
                                                src={item.videouri}>
                                            </Video>
                                        : <Image style={{height:item.height+'rpx'}} src={item.cdn_img}></Image>
                                    }
                                </View>
                            }
                            {
                                type===41 && <View className='cont'>
                                    <View>{item.text}</View>
                                    <Video controls poster={item.bimageuri} style={{height:item.height+'rpx'}} src={item.videouri}></Video>
                                </View>
                            }
                            {
                                type===10 && <View className='cont'>
                                    <View>{item.text}</View>
                                    <Image style={{height:item.height+'rpx'}} src={item.cdn_img}></Image>
                                </View>
                            }
                            {
                                type===29 && <View className='cont'>
                                    <View>{item.text}</View>
                                </View>
                            }
                            {
                                type===31 && <View className='cont'>
                                    <View>{item.text}</View>
                                    <Audio
                                        src={item.voiceuri}
                                        controls={true}
                                        author={item.name}
                                        poster={item.bimageuri}
                                        />
                                </View>
                            }
                            <View className='zan'>
                                
                                <Image src='http://localhost:3000/images/ding.png'/>
                                <Image src='http://localhost:3000/images/cai.png'/>
                                <Image src='http://localhost:3000/images/repeat.png'/>
                                <Navigator url='/pages/pinglun/pinglun'>
                                    <Image onClick={()=>{
                                        changeId(item.id)
                                    }} src='http://localhost:3000/images/comment.png'/>
                                </Navigator>
                                
                            </View>
                            
                            
                        </View>
                    ))
                }
                </ScrollView>
        </View>
        )
    }
    
    changType=(type)=>{
        this.setState({
          type: type
        })
        wx.request({
            url: `https://api.budejie.com/api/api_open.php?a=list&c=data&type=${type}`,
            success: (result) => {
                this.setState({
                data: result.data.list
                })
            }
        });
    }
}



let mapState = state => state.IndexStore
let mapDispatch = dispatch => bindActionCreators(IndexAction, dispatch)
export default connect(mapState, mapDispatch)(Elite)
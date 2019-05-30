import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './logon.scss'

export default class Logon extends Component {

    config = {
        navigationBarTitleText: '登录'
    }
    constructor(){
        this.state={
            username:'',
            password:''
        }
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
                <View>
                    <Input onInput={(e)=>{
                        this.setState({
                            username: e.detail.value
                        })
                    }} placeholder='输入用户名'/>
                    <Input onInput={(e)=>{
                        this.setState({
                            password: e.detail.value
                        })
                    }} placeholder='请输入密码' type='password'/>
                </View>
                <View className='btn'>
                    {/* <Navigator url='/pages/mine/mine'> */}
                        <Button type='warn' onClick={()=>{
                            this.logon()
                        }}>登录</Button>
                    {/* </Navigator> */}
                </View>
                <View className='texts'>
                    <Text>立即注册</Text>
                    <Text>忘记密码</Text>
                </View>
            </View>
            
        </View>
        )
    }
    logon=()=>{
        let {username,password}=this.state
        console.log(username,password)
        
        if (username!==''&& password!==''){
            Taro.switchTab({
            url: '/pages/mine/mine'
            })

        }else{
            if (username === '' && password !== '') {
                Taro.showModal({
                    title: '请输入用户名'
                })
            } else if (username !== '' && password === '') {
                Taro.showModal({
                    title: '请输入密码'
                })
            } else if (username === '' && username === '') {
                Taro.showModal({
                    title: '请输入用户名和密码'
                })
            }
        }
        
        
    }
}

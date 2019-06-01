import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './register.scss'

import {connect} from '@tarojs/redux'
import {bindActionCreators} from 'redux'
import * as IndexAction from '../../store/index/action'

class Register extends Component {

    config = {
        navigationBarTitleText: '注册'
    }

    constructor(){
        this.state={
            users:[],
            name:'',
            pwd:'',
            pwds:'',
            flag:false
        }
    }
    componentWillMount () { }

    componentDidMount () {}

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        let {flag}=this.state
        return (
        <View className='register'>
            <View>
                <Input onInput={(e)=>{
                    this.setState({
                        name: e.detail.value
                    })
                }} placeholder='用户名'/>
                <Input onInput={(e)=>{
                    this.setState({
                        pwd: e.detail.value
                    })
                }} placeholder='密码' type='password'/>
                <Input onInput={(e)=>{
                    this.setState({
                        pwds: e.detail.value
                    })
                }} placeholder='确认密码' type='password'/>
            </View>
            <View className='btn'>
                <Button type='warn' onClick={()=>{
                    this.reg()
                }}>立即注册</Button>
            </View>
        </View>
        )
    }

    reg=()=>{
        let {PushUser}=this.props
        let {name,pwd,pwds} =this.state
        if (name !=='' && pwd !== '' && pwd === pwds) {
            PushUser(name,pwds)
            this.setState({
              flag: true,
              name:'',
              pwd:'',
              pwds:''
            })
            Taro.showToast({
                title:'注册成功',
                icon:'success'
            })
            Taro.navigateTo({
              url: '/pages/logon/logon'
            })

        }else{
            Taro.showModal({
              title: '请重新确认用户名或密码'
            })
        }
    }
}

let mapState = state => state.IndexStore
let mapDispatch = dispatch => bindActionCreators(IndexAction, dispatch)
export default connect(mapState, mapDispatch)(Register)
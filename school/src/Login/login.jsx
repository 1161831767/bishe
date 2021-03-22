import React from 'react';
import './login.css'
import axios from 'axios';
import Top from '../components/top'
import Bottom from '../components/bottom'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import Zhuce from "./zhuce"

export default class Login extends React.Component {
    constructor() {
        super()
    }
    state = {

    }
    registered() {
        let denglukuang = document.querySelector('.denglukuang');
        let zhucekuang = document.querySelector('.zhucekuang');
        denglukuang.style.display = 'none';
        zhucekuang.style.display = 'block'
    }
    loginbtu() {
        let denglukuang = document.querySelector('.denglukuang');
        let zhucekuang = document.querySelector('.zhucekuang');
        zhucekuang.style.display = 'none'
        denglukuang.style.display = 'block';
    }
    login() {
        let username = document.querySelector('.username .ant-input.ant-input-lg').value;
        let pwd = document.querySelector('.pwd .ant-input').value;
        if (!username || !pwd) {
            return window.alert('用户名和密码不能为空，请重新输入！')
        }
        axios.post('/login', {
            username,
            pwd
        }).then(res => {
         console.log(res);
            window.sessionStorage.setItem('id', res.data[0].id)
            window.sessionStorage.setItem('username', res.data[0].username)
            window.sessionStorage.setItem('headimg', res.data[0].headimg)
            window.sessionStorage.setItem('tel', res.data[0].tel)
            window.sessionStorage.setItem('name', res.data[0].name)
            window.sessionStorage.setItem('pwd', res.data[0].pwd)

            window.alert('欢迎回来！')

             window.location.href = 'http://localhost:3000'

        }).catch(e => {
            window.alert('用户名或密码有误，请重新输入！')
        })

    }
    render() {

        return (
            <div>
                <div>
                <Top />
                </div>
                <div className='login_div'>
                    <div className='denglukuang'>
                        <div className='top_loginfont'>登录</div>
                        <div className="login">
                            <div className='username'>
                                账户：<Input size="large" placeholder="请输入账号" prefix={<></>} />
                            </div>

                            <br />
                            <div className='pwd'>
                                密码：
                            <Space direction="vertical">
                                    <Input.Password
                                        placeholder="请输入密码"
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                </Space>
                                <div className='login_but'>
                                    <Button type="primary" shape="round" size="large" onClick={this.login.bind(this)}>
                                        登录
                             </Button>
                                    <span className='zhuce' onClick={this.registered.bind(this)}>没有账户？</span>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='zhucekuang'>
                        <div className='top_loginfont'>注册</div>
                        <div className="zhuce1">
                            <Zhuce />
                            <div className='login_but'>

                                <span className='zhuce_login' onClick={this.loginbtu.bind(this)}>去登陆</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="bottom">
                    <Bottom/>
                </div>
                
            </div>

        )
    }
}
import React from 'react';
import axios from 'axios';

import {
    Form,
    Input,
    Tooltip,
    Button,
} from 'antd';



const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        axios.post('/zhuce', {
            username: values.nickname,
            pwd: values.password,
            name:values.name,
            call:values.call,

        }).then(res => {
            // console.log(res.data);
            if (res.data === 1) {

                window.alert('注册成功！')
                setTimeout((() => {
                    let denglukuang = document.querySelector('.denglukuang');
                    let zhucekuang = document.querySelector('.zhucekuang');
                    zhucekuang.style.display = 'none'
                    denglukuang.style.display = 'block'
                }), 1000)

                // console.log('注册成功 ', values);
            } else { window.alert('该账户已存在，请重新输入！') }
            let reg1 = document.querySelector('#register_nickname')
            let reg2 = document.querySelector('#register_password')
            let reg3 = document.querySelector('#register_confirm')
            reg1.value = ''
            reg2.value = ""
            reg3.value = ""

        }).catch({
        })

    };


    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >

            <Form.Item
                className="loginname"
                name="nickname"
                label={
                    <span id='loginname'>
                        登录名
                         <Tooltip>

                        </Tooltip>
                    </span>
                }
                rules={[
                    {

                        whitespace: true,
                    },
                    () => ({
                        validator(rule, value) {

                            if (value.length >= 2 && value.length <= 6) {
                                return Promise.resolve();
                            }

                            return Promise.reject('请输入2~6位字符作为用户名！');
                        },
                    }),
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="设置密码"
                rules={[
                    {
                        required: true,
                        message: '请输入6-16位含数字/字母的密码!',
                    },
                    () => ({
                        validator(rule, value) {
                            let reg1 = /^(?=.*\d+)(?=.*[A-z]+)(?=.*\w+).{6,16}$/g;

                            if (!value || reg1.test(value)) {
                                return Promise.resolve();
                            }

                            return Promise.reject('密码不能为空且密码为6-16位的数字/字母！');
                        },
                    }),
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请再次输入密码!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('两次密码不一致，请重新输入!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                className="name"
                name="name"
                label={
                    <span id='name'>
                         &nbsp;&nbsp;&nbsp;真实姓名
                         <Tooltip>

                        </Tooltip>
                    </span>
                }
               
            >
                <Input />
            </Form.Item>

            <Form.Item
                className="call"
                name="call"
                label={
                    <span id='call'>
                        &nbsp;&nbsp;&nbsp;联系电话
                         <Tooltip>

                        </Tooltip>
                    </span>
                }
                rules={[
                    {

                        whitespace: true,
                    },
                    () => ({
                        validator(rule, value) {

                            if (value.length == 11 ) {
                                return Promise.resolve();
                            }

                            return Promise.reject('请输入11位手机号！');
                        },
                    }),
                ]}
            >
                <Input />
            </Form.Item>
            <div className='zhuce_but'>
                <Form.Item >

                    <Button type="primary" htmlType="submit">
                        注册
              </Button>


                </Form.Item>
            </div>

        </Form>
    );
};

export default class Zhuce extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <RegistrationForm />
            </>
        )
    }
}
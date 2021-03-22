import React from 'react';
import axios from 'axios';
import "./password.css"
import {
    Form,
    Input,
    Button,
} from 'antd';

const Gaipwd = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        if(values.oldpassword==window.sessionStorage.getItem('pwd')){
            axios.post("/gaipwd",{
                pwd:values.password,
                id: window.sessionStorage.getItem('id')
            }).then(r=>{
                console.log(r);
                if(r.data===1){
                    alert("修改成功")
                    sessionStorage.clear()
                }
                
            }).catch(r=>{
                alert("修改失败，请重试")
            })
        }else{
            alert("原密码不正确")
        }
       

    };


    return (
        <Form
            form={form}
            name="gaipwd"
            onFinish={onFinish}
            scrollToFirstError
            className="gaipwd"
        >

            <Form.Item
                name="oldpassword"
                label="原密码"
                rules={[
                    {
                        required: true,
                        message: '请输入原密码!',
                    },
                   
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="password"
                label="修改密码"
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
                
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                
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


            <div className='zhuce_but'>
                <Form.Item >

                    <Button type="primary" htmlType="submit">
                        确定修改
              </Button>


                </Form.Item>
            </div>

        </Form>
    );
};


export default class Password extends React.Component {
    constructor() {
        super()
        this.state = {
            id: window.sessionStorage.getItem('id'),
            img: window.sessionStorage.getItem('headimg'),
            tel: window.sessionStorage.getItem('tel'),
            pwd: window.sessionStorage.getItem('pwd'),

        }
    }

    render() {
        return (

            <div>

                <Gaipwd />

            </div >
        )

    }
}
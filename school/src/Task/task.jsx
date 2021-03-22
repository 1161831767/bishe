import React, { useState } from 'react';
import Top from '../components/top'
import "./task.css"
import Bottom from '../components/bottom';
import axios from 'axios';
import { Form, Input, Button } from 'antd';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


export default class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            list: [],
            visible: "none"
        }

    }

    formRef = React.createRef();

    componentDidMount() {
        this.GET_SHOW()

    }
    List() {
        const listItem = this.state.list.map(item => {
            return (
                <div key={item.id} className="task1">
                    <div className="content1">

                        <span>送达时间：</span>  <div className="times2">{item.times}</div><br />
                        <span>跑腿地点：</span>   <div className="spot2">{item.spot}</div>
                    </div>
                    <div className="content1">
                        <span>任务描述：</span>  <div className="description2">{item.description}</div><br />
                        <span>任务酬金：</span>  <div className="description2">{item.money}</div>

                    </div>
                    <div className="content1">
                        <span>联系人：</span>  <div className="names2">{item.name}</div><br />
                        <span>联系电话：</span>  <div className="phone2">{item.phone}</div>
                    </div>
                    <Button type="primary" className="jietask" onClick={this.status.bind(this, item.id)}>接取任务</Button>
                </div>)
        })
        return listItem
    }

    GET_SHOW() {
        axios.get("/showlist1", {
            params: {

            }
        }).then(r => {

            this.setState({
                list: r.data
            })
            console.log(this.state.list)
        })
    }

    status(id) {
        console.log(id);
        axios.get("/status", {
            params: { 
                id:id,
                user_id2: window.sessionStorage.getItem('id')
             }
        }).then(r => {
            this.GET_SHOW()
            alert("接取成功")
            
            
        }).catch(r => {
            alert("接取失败")
        })

    }


    onFinish = (values) => {
        console.log(values);
        axios.post("/fabu", {
            description: values.description,
            times: values.times,
            spot: values.spot,
            names: values.names,
            phone: values.phone,
            money: values.money,
            user_id1: window.sessionStorage.getItem('id')
        }).then(r => {
            console.log(r)
            if (r.data.affectedRows == 1) {
                alert("上传成功")
                window.location.reload()
            }
        }).catch(e => {
            alert("上传失败")
        })
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    //点击显示
    cilckfabu() {
        this.setState(
            { visible: "flex" }
        )

    }
    none() {
        this.setState(
            { visible: "none" }
        )
    }


    render() {

        return (
            <div>
                <div>
                    <Top />
                </div>
                <div className="task">

                    <div className="fatask">

                        <Button block className="fabutton" onClick={this.cilckfabu.bind(this)}>发 布 任 务</Button>
                        <div style={{ display: this.state.visible }} className="motai">
                            <div className="form-box">
                                <span className="xtask" onClick={this.none.bind(this)}>x</span>
                                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}
                                >
                                    <Form.Item
                                        name="description"
                                        label="任务"
                                    >
                                        <Input placeholder="请输入任务" />
                                    </Form.Item>
                                    <Form.Item
                                        name="times"
                                        label="时间"
                                    >
                                        <Input placeholder="请输入时间" />
                                    </Form.Item>
                                    <Form.Item
                                        name="spot"
                                        label="地点"
                                    >
                                        <Input placeholder="请输入地点" />
                                    </Form.Item>
                                    <Form.Item
                                        name="names"
                                        label="联系人"
                                    >
                                        <Input placeholder="请输入联系人" />
                                    </Form.Item>
                                    <Form.Item
                                        name="phone"
                                        label="联系电话"
                                    >
                                        <Input placeholder="请输入联系电话" />
                                    </Form.Item>
                                    <Form.Item
                                        name="money"
                                        label="酬金"
                                    >
                                        <Input placeholder="请输入酬金" />
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">
                                            提交
                                    </Button>
                                        <Button htmlType="button" onClick={this.onReset}>
                                            重置
                                    </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <hr></hr>


                    <div className="tasklist">
                        <div >
                            {this.List()}
                        </div>


                    </div>
                </div>
                <div className="bottom">
                    <Bottom />
                </div>

            </div>

        )
    }

}
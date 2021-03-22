import React from 'react';
import axios from 'axios';
import { Table, Tag, Space } from 'antd';

const columns = [
    {
        title: '任务名',
        dataIndex: 'description',
        key: 'description',
        render: (description) => <div style={{ width: "100px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{description}</div>,
    },
    {
        title: '时间',
        dataIndex: 'times',
        key: 'times',
        render: (times) => <div style={{ width: "200px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{times}</div>,
    },
    {
        title: '联系人',
        dataIndex: 'name',
        key: 'name',
        render: (name) => <div style={{ width: "100px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{name}</div>,

    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status) => <span>{status}</span>
    },

    {
        title: '操作',
        key: 'action',
        render: (r) => (<a onClick={complete.bind(this,r)}>完成</a>),
    },
];

function complete(r){
    console.log(r);
    axios.get("/complete",{
        params:{
            id:r.key
        }
    }).then(res=>{
        if(res.data===1){
            alert("修改成功");
            window.location.reload();
        }
    })
}



export default class Admtask extends React.Component {
    constructor() {
        super()
        this.state = {

            data: [],
        }
    }



    componentDidMount() {
        this.get_tasklist1()
    }
    get_tasklist1() {
        axios.get("/tasklist", {
            params: {
                id: window.sessionStorage.getItem("id")
            }
        }).then(r => {

            let newArr = JSON.stringify(r.data).replace(/id/g, "key");
            let newArr2 = JSON.parse(newArr)
            console.log(newArr2)
            this.setState({
                data: newArr2
            })
        })
    }

dellost=()=>{

}


    render() {

        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} /><br/>
                注：状态栏中，0为已发布，1为已接取，2为已完成
                
            </div>

        )
    }
}
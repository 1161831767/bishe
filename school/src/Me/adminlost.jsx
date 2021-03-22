import React from 'react';

import axios from 'axios';
import { Table, Tag, Space } from 'antd';

const columns = [
    {
        title: '失物名称',
        dataIndex: 'name',
        key: 'name',
        render: (name) => <div style={{ width: "100px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{name}</div>,
    },
    {
        title: '图片',
        dataIndex: 'url',
        key: 'url',
        render: (url) => <img width="50px" height="50px" src={url} />,
    },

    {
        title: '操作',
        key: 'action',
        render: (r) => (<a onClick={dellost.bind(this,r)}>删除</a>),
    },
];

function dellost(r){
    console.log(r);
    axios.get("/dellost",{
        params:{
            id:r.key
        }
    }).then(res=>{
        if(res.data===1){
            alert("删除成功");
            window.location.reload();
        }
    })
}



export default class Adminlost extends React.Component {
    constructor() {
        super()
        this.state = {

            data: [],
        }
    }



    componentDidMount() {
        this.get_lostlist()
    }
    get_lostlist() {
        axios.get("/lostlist", {
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
                <Table columns={columns} dataSource={this.state.data} />
            </div>

        )
    }
}
import React from 'react';
import Top from '../components/top'
import "./lost.css"
import Bottom from '../components/bottom';
import { Button } from 'antd';
import axios from 'axios';

export default class Lost extends React.Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
   

    componentDidMount() {
        axios.get("/showlist", {
            params: {

            }
        }).then(r => {

            this.setState({
                list: r.data
            })
            console.log(this.state.list)
        })
    }
    List() {

        const listItem = this.state.list.map((item, index) => {
            return (
                <div key={index} className="goods">
                    <div className="content">
                        <span>失物名称：</span>  <div className="name1">{item.name}</div><br />
                        <span>捡拾时间：</span>  <div className="times1">{item.times}</div>
                    </div>
                    <div className="content">
                        <span>捡拾地点：</span>   <div className="spot1">{item.spot}</div><br />
                        <span>失物描述：</span>  <div className="description1">{item.description}</div>
                    </div><br />
                    <div className="content">
                        <span>联系电话：</span>  <div className="phone1">{item.phone}</div>
                    </div>
                    <span>失物图片：</span>   <img className="shiwuimg" src={item.url} alt="" />



                </div>)
        })
        return listItem
    }

    block() {
        let motai = document.querySelector(".motai");
        motai.style.display = "block";
    }

    none() {
        let motai = document.querySelector(".motai");
        motai.style.display = "none";
    }
    shangchuan() {
        this.uploadImg()
        let name = document.querySelector(".name").value
        let times = document.querySelector(".times").value
        let spot = document.querySelector(".spot").value
        let description = document.querySelector(".description").value
        let phone = document.querySelector(".phone").value


        axios.get("/shangchuan", {
            params: {
                name: name,
                times: times,
                spot: spot,
                description: description,
                phone: phone,
                user_id:window.sessionStorage.getItem('id')
            }
        }).then(r => {
            console.log(r)
            if (r.data.affectedRows == 1) {
                alert("上传成功")
                window.location.reload()
            }
        }).catch(e => {
            alert("上传失败")
        })
    }


    uploadImg() {
        let file = document.getElementById("choose").files[0];
        let formData = new FormData();
        console.log(file);
        formData.append("uploadFile", file, file.name);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
            }
        };
        axios
            .post("/uploadImg", formData, config)
            .then(function (response) {
                console.log(response)
            })
    }

    render() {

        return (
            <div>
                <div>
                    <Top />
                </div>
                <div className="lost">
                    <div className="guihuan">
                        <Button block onClick={this.block.bind(this)}>我  要 归 还</Button>
                    </div>
                    <hr></hr>

                    <div className="motai">
                        <div className="shiwu">
                            <span className="cencelgh" onClick={this.none.bind(this)}>x</span>
                            <div className="shiwu1">
                                <label>失物名称</label>
                                <input type="text" className="name"></input><br />
                                <label>捡拾时间</label>
                                <input type="text" className="times"></input><br />
                                <label>捡拾地点</label>
                                <input type="text" className="spot"></input><br />
                                <label>失物描述</label>
                                <input type="text" className="description"></input><br />
                                <label>联系电话</label>
                                <input type="text" className="phone"></input><br />
                                <p>添加图片</p><input type="file" id="choose" /><br />
                                <img /><br />
                                <Button className="shangchuan" onClick={this.shangchuan.bind(this)}>上传</Button>
                            </div>
                        </div>
                    </div>
                    <div className="lostlist">
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
import React from 'react';
import Top from '../components/top'
import "./me.css"
import Bottom from '../components/bottom';
import { Menu } from 'antd';
import Data from "./data"
import Password from "./password"
import Adminlost from "./adminlost"
import Admtask1 from "./admtask1"


const { SubMenu } = Menu;

export default class Me extends React.Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    handleClick = e => {
        console.log('click ', e);
        let one = document.querySelector(".one");
        let two = document.querySelector(".two");
        let three = document.querySelector(".three");
        let four = document.querySelector(".four");
        let five = document.querySelector(".five");

        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
        five.style.display = "none";

        if (e.key == "one") {
            one.style.display = "block";
        } else if (e.key == "two") {
            two.style.display = "block";
        } else if (e.key == "three") {
            three.style.display = "block";
        }else if (e.key == "four") {
            four.style.display = "block";
        }else if (e.key == "five") {
            five.style.display = "block";
        }
    };

    render() {

        return (
            <div>
                <div>
                    <Top />
                </div>
                <div className="middle">
                    <div className="left">
                        <Menu
                            onClick={this.handleClick}
                            defaultSelectedKeys={['one']}
                            mode="inline"
                        >
                            <Menu.Item key="one" className="left1">修改资料</Menu.Item>
                            <Menu.Item key="two" className="left1"> 修改密码</Menu.Item>
                            <Menu.Item key="three" className="left1"> 失物管理</Menu.Item>
                            <SubMenu key="sub1" title="跑腿管理" >
                                <Menu.Item key="four" className="paotui12">我发布的跑腿</Menu.Item>
                                <Menu.Item key="five" className="paotui12">我接取的跑腿</Menu.Item>

                            </SubMenu>

                        </Menu>
                    </div>
                    <div className="right">
                        <div className="one">
                            <Data/>
                        </div>
                        <div className="two">
                            <Password/>
                        </div>
                        <div className="three">
                            <Adminlost/>
                        </div>
                        <div className="four">
                            <Admtask1/>
                        </div>
                        <div className="five">
                            5
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
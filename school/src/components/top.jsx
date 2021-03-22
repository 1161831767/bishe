import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { HomeOutlined, ShopOutlined, AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import './top.css';

const { SubMenu } = Menu;

export default class Top extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  zhuxiao() {
    sessionStorage.clear()
  }

  render() {
    const { current } = this.state;
    return (
      <Menu id='nav' onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item id='home' key="home" icon={<HomeOutlined />}>
          <Link to={{ pathname: "/" }}>
            首页
          </Link>

        </Menu.Item>
        <Menu.Item id='shiwu' key="shiwu" icon={<ShopOutlined />}>
          <Link to={{ pathname: "/Lost" }}>
            失物招领
          </Link>

        </Menu.Item>
        <Menu.Item id='paotui' key="paotui" icon={<AppstoreOutlined />}>
          <Link to={{ pathname: "/Task" }}>
            任务大厅
          </Link>

        </Menu.Item>
        <Menu.Item id='me' key="me" icon={<SettingOutlined />}>
          <Link to={{ pathname: "/Me" }}>
            个人中心
          </Link>

        </Menu.Item>
        <Menu.Item id='login' key="login" >
          <span icon={<UserOutlined />} style={{ display: sessionStorage.getItem('username') ? 'none' : 'inline-block' }}>
            <Link to={{ pathname: "/login" }}>
              登录/注册
              </Link>
          </span>
          <span style={{ display: !sessionStorage.getItem('username') ? 'none' : 'inline-block' }} className='head'>
            <img src={`${sessionStorage.getItem('headimg')}`} width='50px' className='headI' />
            <span className='zhuxiao' onClick={this.zhuxiao.bind(this)} >
              <Link to={{ pathname: '/login' }}>
                注销
                  </Link>
            </span>
          </span>

        </Menu.Item>
      </Menu>
    );
  }
}


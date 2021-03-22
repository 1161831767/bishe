import React from 'react';
import Top from '../components/top'
import "./home.css"
import Bottom from '../components/bottom'
import imgs from "../img/paotui.jpg"
import { Button } from 'antd';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    constructor() {
        super()
    }
    state = {

    }

    render() {
        return (
            <>
                <Top />
                <div className='homepage'>
                    <img src={imgs} alt="" />
                    <Button type="primary" className="xiadan">
                        <Link to={{ pathname: "/Task" }}>

                            <b>立 即 下 单</b>
                        </Link>
                    </Button>

                </div>
                <Bottom />
            </>
        )
    }
}
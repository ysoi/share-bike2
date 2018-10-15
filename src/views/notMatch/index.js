import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.less";
import notfoundImg from "./01.gif";
export default class NotMatch extends Component{
    render(){
        return(
            <div className="notMatch">
                <div className="left">
                    <h1>Oh my god!</h1>
                    <span>404您要的页面没有找到</span>
                    <h5>您如果不想等待，可调转到如下页面</h5>
                    <ul>
                        <li>或者你可以去</li>
                        <li><Link to="/admin/home">回首页</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <img src={notfoundImg} alt="" />
                </div>
            </div>
        )
    }
}
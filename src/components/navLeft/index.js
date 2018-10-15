import React, {Component} from "react";
import "./index.less";
import {Menu} from "antd";
import {Link} from "react-router-dom";
const SubMenu=Menu.SubMenu;
const MemuItem=Menu.Item;
export default class Nav extends Component{
    render(){
        return(
            <div className="wrapNav">
                <Menu theme="dark">
                    <MemuItem key="/admin/home"><Link to="/admin/home">首页</Link></MemuItem>
                    <SubMenu title="骑行订单">
                        <MemuItem key="/admin/order"><Link to="/admin/order">订单管理</Link> </MemuItem>
                        <MemuItem key="/common/order/detail"><Link to="/common/order/detail">订单详情</Link> </MemuItem>
                    </SubMenu>
                   
                    <SubMenu title="骑行图表">
                        <MemuItem key="/admin/echarts/bar">
                            <Link to="/admin/echarts/bar">条形图</Link>
                        </MemuItem>
                        <MemuItem key="/admin/echarts/pie">
                            <Link to="/admin/echarts/pie">饼状图</Link>
                        </MemuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
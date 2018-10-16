import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import actionCreator from "../../redux/actionCreator";
import "./index.less";
import {Menu} from "antd";
import {Link} from "react-router-dom";
const SubMenu=Menu.SubMenu;
const MemuItem=Menu.Item;
class Nav extends Component{
    clickMenuItem=({item,key,keyPath})=>{
       console.log(item);
        const text=item.props.children.props.children;
        this.props.action.changeMenuItem(text);
        //第一种方法，较low
        // console.log(this.props.dispatch({type:"CHANGE_MENU_ITEM",text}));
        
    }
    render(){   
        return(
            <div className="wrapNav">
                <Menu theme="dark" onClick={this.clickMenuItem}> 
                    <MemuItem key="/admin/home"><Link to="/admin/home">首页</Link></MemuItem>
                    <SubMenu title="骑行订单">
                        <MemuItem key="/admin/order">
                            <Link to="/admin/order">订单管理</Link>
                        </MemuItem>
                        <MemuItem key="/common/order/detail">
                            <Link to="/common/order/detail">订单详情</Link>
                        </MemuItem>
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
//connect中两个非必传参数mapStateToProps、mapActionToProps

export default connect(
    null,
    (dispatch)=>({
        action:bindActionCreators(actionCreator,dispatch)
    })
)(Nav)
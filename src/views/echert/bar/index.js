
//引入主模块
import React,{Component} from 'react';
import echarts from 'echarts/lib/echarts';

import {Card} from "antd";
//引入条形图
import "echarts/lib/chart/bar";
//引入提示框组件、标题组件、工具箱组件
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/markPoint";
import shine from "../shine";
import EchartsReact from "echarts-for-react";


class Bar extends Component {
    componentWillMount(){
        echarts.registerTheme('shine',shine);
        this.renderBar1();
        this.renderBar2();

    };
    renderBar1=()=>{
        this.option1={
            title:{
                text:'OFO周订单',
               
            },
            tooltip:{
                trigger:'axios'
            },
            xAxis:[
                {
                    type:'category',
                    data:['周一','周二','周三','周四','周五','周六','周日'],
                    axisTick:{
                        alignWithLabel:true
                    }
                }
            ],
            yAxis:[
                {type:'value'}
            ],
            series:[
                {
                    name:'ofo订单量',
                    type:'bar',
                    data:[500,1000,1600,3000,2800,2870,2600]
            }
            ]
        }
    };
    renderBar2=()=>{
        this.option2={
            title:{
                text:'用户骑行订单',
            },
            tooltip:{
                trigger:'axios'
            },
            xAxis:[
                {
                    type:'category',
                    data:['周一','周二','周三','周四','周五','周六','周日'],
                    axisTick:{
                        alignWithLabel:true
                    }
                }
            ],
           legend:{
                data:['OFO','摩拜','小蓝单车']
           },
            yAxis:[
                {type:'value'}
            ],
            series:[
                {
                    name:'ofo订单量',
                    type:'bar',
                    data:[500,1000,1600,3000,2800,2870,2600]
            },
            {
                name:'摩拜',
                type:'bar',
                data:[600,1200,1800,5000,6000,8000,10000]
            },
            {
                name:'小蓝单车',
                type:'bar',
                data:[300,600,800,1800,2000,1500,1000]

            }
            ]
        }
    };
    render() {
        return (
            <div>
                <Card title="条形图标1">
                   <EchartsReact option={this.option1} theme='shine'></EchartsReact>
                </Card>
                <Card title="柱形图标二">
                    <EchartsReact option={this.option2} theme='shine'></EchartsReact>
                </Card>
            </div>
        )
    }
}
export default Bar ;
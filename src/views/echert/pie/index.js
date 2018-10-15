import React ,{Component} from 'react';
import echarts from "echarts/lib/echarts";
import {Card} from "antd";
import ReactEcharts from "echarts-for-react";
import theme from "../theme";
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';

class Pie extends Component{ 
    componentWillMount(){
        echarts.registerTheme('theme',theme);
        this.renderPie1();
        this.renderPie2();
    };
    renderPie1=()=>{
        this.option1={
            title:{
                text:"用户骑行订单",
                x:'center'
            },
            legend:{
                orient:'vertical',//排列方向
                data:['周一','周二','周三','周四','周五','周六','周日'],
                top:20,
                right:20,
            },
            tooltip:{
                trigger:'item'
            },
            series:[
                {
                    name:"骑行订单",
                    type:'pie',
                    radius:'60%',
                    center:['50%','50%'],//位置
                    data:[
                        {value:1000,name:'周一'},
                        {value:1000,name:'周二'},
                        {value:1000,name:'周三'},
                        {value:1000,name:'周四'},
                        {value:1000,name:'周五'},
                        {value:1000,name:'周六'},
                        {value:1000,name:'周日'},
                       
                    ]
                }

            ]
        }
    };
    renderPie2 =()=> {
        this.option2 = {
            title : {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                data: ['周一','周二','周三','周四','周五', '周六', '周日'],
                top: 20,
                right: 20
            },
            tooltip: {
                trigger: 'item'
            },
            series : [
                {
                    name: '骑行订单',
                    type: 'pie',
                    radius : ['50%', '80%'],
                    center: ['50%', '60%'],
                    data:[
                        {value:1000, name:'周一'},
                        {value:2000, name:'周二'},
                        {value:2000, name:'周三'},
                        {value:1800, name:'周四'},
                        {value:2700, name:'周五'},
                        {value:5000, name:'周六'},
                        {value:10000, name:'周日'},
                    ]
                }
            ]
        }
    }
    render(){
        return(
            <div >
                <Card title="饼图一">
                    <ReactEcharts option={this.option1} theme="theme"></ReactEcharts>
                </Card>
                <Card title="环图二">
                    <ReactEcharts option={this.option2} theme="theme"></ReactEcharts>
                </Card>
            </div>
        )
}
}
export default Pie;




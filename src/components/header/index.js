import React, {Component} from "react";
import "./index.less";
import {Breadcrumb,message} from "antd";
import  util from "../../utils/index";
import axios from "axios";
import {connect} from "react-redux";

class Header extends Component{
    state={
        date:"",
        
        weather:""
    };
    //获取当前时间
    getTime(){
       setInterval(()=>{
         let unix=new Date().getTime();
         let date=util.formatDate(unix);
         this.setState({
            date
         })
       },1000)
    };
    // 获取天气
    //https://www.sojson.com/api/weather.html该网址提供相应API方法
    getWeather(){
        axios.get("http://t.weather.sojson.com/api/weather/city/101180101").then(res=>{
          
            if(res.status ===200){
                console.log(res.data);
                let data=res.data;
                let city=data.cityInfo.city;
                let low=data.data.forecast[0].low;
                let hight=data.data.forecast[0].high;
                let fx=data.data.forecast[0].fx;
                let fl=data.data.forecast[0].fl;
                let weather=`${city}:${low}-${hight},${fx}${fl}`;
                this.setState({
                    weather
                })
                
            }else{
               message.waring(res.message);
            }
        })
    }
     //组件即将挂载
   componentWillMount(){
     this.getTime();
     this.getWeather();
    
   }
    render(){
      
        return(
            <div className="wrap">
                <div className="first clearfix">
                    <div className="text flr">
                        <span>欢迎，</span><span className="user">李丹青</span>
                        {' '}
                        <strong className="quit">退出</strong>
                    </div>
                   
                </div>  
                <div className="second clearfix">
                    <div className="left fll">
                       <Breadcrumb className="crumb">
                            <Breadcrumb.Item className="homePage">{this.props.menuText.menuItemText}</Breadcrumb.Item>
                          
                       </Breadcrumb>
                    </div>
                    <div className=" right flr">
                        <span className="text">{this.state.date}</span>
                            <span>{' '}</span>
                        <strong>{this.state.weather}</strong>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    function mapStateToProps(state){
        return{
            menuText:state
        }
    }
)(Header)
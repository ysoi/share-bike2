
import React ,{Component} from 'react';
import  {Row,Col} from "antd";
import Header from "../../components/header";
import Nav from "../../components/navLeft";
import Footer from "../../components/footer";
import "./index.less";
export default class Admin extends Component{
    render(){
        return(
            <div>
                <Row >
                    <Col span={4}>
                        <Nav/>
                    </Col>
                    <Col span={20} className="homeRight">
                        <Header/>
                        <div className="content-wrap">
                            <div className="content">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer/>
                    </Col>
                </Row>
              
               
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Card, Select, Form, DatePicker,Button,Table,Modal,message} from "antd";
import axios from "../../axios";
const Option = Select.Option;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
class Order extends Component {
  
    //城市数据
    state={
        tableData:[],
        pagination:{
            total:0,
            pageSize:10,
            current:1
        },
        pn:1,
        // 数据加载中
        loading:{
            spinning:true,
            tip:"数据正在拼命加载中",
            size:"large"
        },
        // 选择每一行的密钥
        selectedRowKeys:[],
        endItem:{},
       

    };
    cityData = [
        {
            label: "北京",
            id: '0',

        },
        {
            label: '上海',
            id: '01'
        },
        {
            label: '广州',
            id: '02'
        },
        {
            label: '郑州',
            id: '03'
        }

    ];
    // 状态数据
    orderStatu = [
        {
            label: "全部",
            id: '0',

        },
        {
            label: '结束',
            id: '01'
        },
        {
            label: '进行中',
            id: '02'
        },

    ];
    //查询表单数据
    handleSearch=()=>{
        console.log(this);
        const form=this.props.form.getFieldsValue();
        // console.log(this.props.form.getFieldsValue());
        console.log(form);
    };
    //重置表单数据
    handleReset=()=>{
      this.props.form.resetFields();
    };
    //选择的数据
    rowSelected=(index,data)=>{
        this.setState({
            selectedRowKeys:index,
            selectedItem:data
        })
    }
    
    // 获取表格数据
    getTableData=()=>{
        let params={
            page:this.state.pn
        }
        this.setState({
            loading:{
                ...this.state.loading,
                spinning:true
            }
        })
        axios.get("/order/list",params).then(res=>{
          
            if(res.code==="0"){
                console.log(res);
                this.setState({
                    tableData:res.result.item_list.map((item,index)=>{
                        item.key=index;
                        return item
                    }),
                    pagination:{
                        total:res.result.total_count,
                        current:this.state.pn,
                        pageSize:10,
                        onChange:(page)=>{
                            console.log(page);
                            this.setState({
                                pn:page
                            },()=>this.getTableData())
                        }
                    },
                    loading:{
                        ...this.state.loading,
                        spinning:false
                    }
                })
               
            }
           
        })  
    };
   
    componentWillMount(){
        this.getTableData();
    };
    // 处理对话框OK时间

    handleEnd=()=>{
        axios.get("/order/finish_order",this.state.endItem.id).then(res=>{
            if(res.code==="0"){
                this.setState({
                    visible:false
                });
                this.getTableData();
                message.success("成功结束订单");
            }
        })
    };
    //展示订单详情
    showDetail=()=>{
        let {selectedItem}=this.state;
        if(selectedItem){
            const id=this.state.selectedItem.id;
            window.open(`/#/common/order/detail/${id}`,'_blank')

        }else{
            Modal.info({
                title:'提示',
                content:'请选择一个订单'
            })
        }
    };
    //结束订单
    handleDone=()=>{
        let {selectedItem}=this.state;
        if(!selectedItem){
            Modal.info({
                title:"信息",
                content:'请选择一条订单结束',
                onOk(){}
            })
        }else{
            axios.get('/order/ebike_info').then(res=>{
                if(res.code==="0"){
                    this.setState({
                        endItem:res.result,
                        visible:true
                    })
                }
            }
               
            )
        }
    };
    render() {
        const {getFieldDecorator}=this.props.form;

        //表头
        const tableColumns=[
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                },
                key: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
        ];

        const rowSelection={
            type:'radio',
            selectedRowKeys:this.state.selectedRowKeys,
            onChage:(selectedRowKeys,selectedRow)=>{
                this.setState({
                    selectedRowKeys:selectedRowKeys,
                    selectedItem:selectedRow
                })
            }
        };
        
      
        return (
            <div className='order'>
                <Card title="订单检索">
                    <Form layout="inline" >
                        <FormItem label="城市">
                            {getFieldDecorator('city')(
                                <Select placeholder="选择城市" style={{ width: "200px" }}>
                                    {this.cityData.map(item => <Option value={item.id} key={item.id}>{item.label}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="订单时间">
                            {getFieldDecorator('orderTime')(
                                 <RangePicker placeholder={["开始", "结束"]} />
                            )}
                           
                        </FormItem>
                        <FormItem label="订单状态">
                            {getFieldDecorator('status')(
                                 <Select placeholder="选择订单状态" style={{ width: "200px" }}>
                                    {this.orderStatu.map(item => <Option value={item.id} key={item.id}>{item.label}</Option>)}
                                </Select>
                            )}
                           
                            
                        </FormItem>
                        <div style={{marginTop:"15px"}}>
                            <Button type="primary"   style={{marginRight:"20px"}} onClick={this.handleSearch}>查询</Button>
                            <Button type="danger" onClick={this.handleReset}>重置</Button>
                        </div>
                    </Form>
                </Card>
                <Card title="订单操作" >
                    <Button type="primary" size="large" style={{marginRight:"20px"}} onClick={this.showDetail}>订单详情</Button>
                    <Button type="primary" size="large" onClick={this.handleDone}>结束订单</Button>
                </Card>
                <Card title="订单管理">
                    <Table 
                    bordered
                    loading={this.state.loading}
                    columns={tableColumns} 
                    dataSource={this.state.tableData}
                    rowSelection={rowSelection}
                    onRow={(row,index)=>{
                        return {
                            onClick:()=>{
                                this.rowSelected([index],row)
                            }
                        }
                    }}
                    pagination={this.state.pagination}
                    ></Table>
                </Card>
                <Modal 
                title="结束订单"
                visible={this.state.visible}
                onOk={this.handleEnd}
                onCancel={()=>this.setState({
                    visible:false
                })}
                >
                <ul >
                    <li>
                        <span>车辆编号：</span>
                        {this.state.endItem.bike_sn}
                    </li>
                    <li>
                        <span>剩余电量：</span>
                        {this.state.endItem.battery} 
                    </li>
                    <li>
                        <span>行程开始时间：</span>
                        {this.state.endItem.start_time} 
                    </li>
                    <li>
                        <span>当前位置：</span>
                        {this.state.endItem.location} 
                    </li>
                </ul>
                </Modal>

            </div>
        )
    }
}

export default Form.create()(Order);
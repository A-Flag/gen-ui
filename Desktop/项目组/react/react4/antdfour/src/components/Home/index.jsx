import '../Home/home.css'
import React, { useState,useEffect } from 'react';
import { Table,Button, Checkbox, Form, Input } from 'antd';
import api from '../../utils/api/https';


const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
      width: 150,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 180,
    },
    {
      title: 'authorHighlight',
      dataIndex: 'authorHighlight',
      key: 'authorHighlight',
      width: 180,
    },
    {
      title: 'Cover',
      dataIndex: 'cover',
      key: 'cover',
      ellipsis: true,
    },
  ];

const Home = () =>{
    console.log('i am home')
    const [form] = Form.useForm();
    const [datalist, setDatalist] = useState([]);
    useEffect(()=>{
        let jsons ={
            current: 1,
            size: 10
        }
        api.Works(jsons).then((res)=>{
            console.log('res',res)
            setDatalist(res.data.data)
       
        })
    },[])
    const onSearch=(val)=>{
        console.log('--val',form.getFieldValue())
        
    }
    return(
        <div>
             <header
             >
                <Form
                    form={form}
                    layout="inline"
                >
                    <Form.Item  class="form-item-css" width="160px" label="title" name="titel">
                        <Input allowClear={true} placeholder="请输入标题" />
                    </Form.Item>
                    <Form.Item  class="form-item-css" label="id" name="id">
                        <Input allowClear={true} placeholder="请输入id" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={onSearch}>查询</Button>
                    </Form.Item>
                </Form>
             </header>
            <Table columns={columns} dataSource={datalist} />;
        </div>
    )
}
export default Home
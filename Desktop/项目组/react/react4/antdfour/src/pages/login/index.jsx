import './index.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import {useHistory} from 'react-router-dom'
import https from '../../utils/api/https'
import api from '../../utils/api/https';
import {setRsa,Encrypt} from "../../utils/_ways/encryption"

function clone(target){
  if(typeof target !='object'){
    let cloneT =  target instanceof Array ? []:{}
      for(const item in target ){
        cloneT[item] = clone(target[item])
      }
  }else{
    return target
  }
}
  
  let jons1 = {
    val1:[
      {a:'2',b:2}
    ],
    b:{
      a:1
    },
    a:3
  }
  console.log(clone(jons1),'jons1')
  const target1 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
// let target2 = clone(target1.target1=target1);

// console.log('target2',target2)

function clone11(target, map = new Map()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          cloneTarget[key] = clone(target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
};
// console.log(clone11(target1.target1=target1))

// function clone(target,map=new Map()){
//     if(typeof target !='object'){
//       let cloneT =  target instanceof Array ? []:{}
//           if(Array.isArray(target)){
            
//           }else{

//           }
//     }else{
//       return target
//     }
// }

const App = () => {
    let obj1 = {name:'zhangsan',age:'20'}
    let __newArray=['lal1','lal2','lal3']
    let person = new Map()
    __newArray.map((item,index)=>{
        person.set(index,item)
    })
    // console.log('person',person,'person--get',person.get('lal1'),'----123',Object.keys(person),'222',Object.keys(obj1))
    console.log(person,'---person','person[0]',person.get('lal1'))
    let lla ={}
    for(let item of person){
   
    console.log('!!!!!!',item)
    }
    console.log('lla',lla)
    // person.set('name','lisi')
    // person.set('age','35')
    // console.log('person----',person,person.has('name'),person.get('name'), person.delete('age'),'person---person',person,person.clear())
    const [form] = Form.useForm();
    const history = useHistory()
    form.setFieldsValue({username:'lalala'})
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    
        // 页面跳转方法
        // history.push({pathname: '/index', search: 'test=22222'})
        console.log('https---',api.Login)
        let jsons={
            username:'admin1',
            password:setRsa('123456')
        }
        api.Login(jsons).then((res)=>{
            console.log('res',res)
            let {token,data} =  res.data
            sessionStorage.setItem('@#@TOKEN',token);
            sessionStorage.setItem('_NMAERESU',data.username);
            history.push({pathname: '/index', search: 'test=22222'})
        })
    };

  return (
      <div  className="setwh">
    <Form
    form={form}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
};

export default App;

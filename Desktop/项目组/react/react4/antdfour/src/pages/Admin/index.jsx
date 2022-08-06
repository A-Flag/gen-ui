import '../Admin/index.css'
import {Switch, Route,useHistory} from 'react-router-dom'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Aside from './Main/header'
import Home from '../../components/Home';
import Page1 from '../../components/Page1';

 const { Header, Content, Footer, Sider } = Layout;
 
  
    function getItem(label, key, icon, children,url) {
            return {
            key,
            icon,
            children,
            label,
            url
            };
    }

        //仅有权限菜单
        const getList = '/home,/project1,/function1,/function2,/set,/team2,/team1,'
        let getListArr = getList.split(',')
        console.log('getListArr',getListArr)
  
    let items = [
        {
         
            key:'1',
            icon:<PieChartOutlined />,
            children:'',
            label:'首页',
            url:'/home'
        },
        {
         
            key:'2',
            icon:<DesktopOutlined />,
            children:'',
            label:'项目2',
            url:'/project2'
        },
        {
         
            key:'sub1',
            icon:<UserOutlined />,
            children:[
                {
                    key:'3',
                    icon:'',
                    children:'',
                    label:'功能1',
                    url:'/function1'
                },
                {
                    key:'4',
                    icon:'',
                    children:'',
                    label:'功能2',
                    url:'/function2'
                },
                {
                    key:'5',
                    icon:'',
                    children:'',
                    label:'功能3',
                    url:'/function3'
                }
            ],
            label:'项目1',
            url:'/project1'
        },
        {
         
            key:'sub2',
            icon:<TeamOutlined />,
            children:[
                {
                    key:'6',
                    icon:'',
                    children:'',
                    label:'1团',
                    url:'/team1'
                },
                {
                    key:'8',
                    icon:'',
                    children:'',
                    label:'2团',
                    url:'/team2'
                }
            ],
            label:'团队',
            url:''
        },
        {
            key:'9',
            icon:<FileOutlined />,
            children:'',
            label:'设置',
            url:'/set'
        },
    ];
    console.log('------allllllala' ,items)
    let newArr=[];
    items.map(item=>{
        if(!item.children){
            if(getListArr.indexOf(item.url)>-1){
                newArr.push(item)
                // savFilter.push(getItem(item.key,item.icon,item.children,item.label,item.url))
            }
           
        }else{
            let emptyArr = []
            item.children.forEach((item1,index) => {
                console.log('进来了---lalalla',item1)
                   if(getListArr.indexOf(item1.url)>-1){
                        emptyArr.push(item1)
                   }
                  
               });
               console.log('emptyAr-----r',emptyArr)
               item.children =emptyArr
               if(emptyArr.length !==0){
                    newArr.push(item)
               }
               
               
        }
    })
    items=newArr
// function getItem1(label, key, icon, children,url) {
//     return {
//     key,
//     icon,
//     children,
//     label,
//     url
//     };
// }
// let newArr=[];
// savFilter.map(item=>{
//     if(!item.children){
//         console.log('nnnnnn')
//         newArr.push(getItem1(item.label,item.key,item.icon,item.children,item.url))
//     }else{
//         let clonData1 = JSON.parse(JSON.stringify(item))
//         Reflect.deleteProperty(clonData1, 'children')
//         clonData1.children = []
//         item.children.map(item2=>{
//             clonData1.children.push(getItem1(item2.label,item2.key,item2.icon,item2.children,item2.url))
//         })
//         console.log('item.children',item.children)
//         newArr.push(getItem1(clonData1))
       
//     }
// })
// console.log('newArr',newArr)
    const App = () => {
        // items=newArr
        console.log('我被调用几次了')
        const [collapsed, setCollapsed] = useState(false);
        const [isShow, setIsShow] = useState(1);
        const history = useHistory()
        const onClick=(e)=>{
            console.log(e.key,'e@@')
            switch(e.key){
                case '1':
                    console.log('jinlail--1')
                    history.push({pathname:'/index/home'})
                setIsShow(1);
                break;
                case '3':
                    console.log('jinlail--2')
                    history.push({pathname:'/index/Page1'})
                setIsShow(2);
                break;
            }
        }
        return (
        <Layout
            style={{
            minHeight: '100vh',
            }}
        >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu  
            onClick={onClick}
            theme="dark" 
            defaultSelectedKeys={['1']} 
            mode="inline" 
            items={items} />
        </Sider>
        <Layout className="site-layout">
        
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
              <Aside></Aside>
            </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {/* Bill is a cat. */}
                {/* <div style={{display:isShow===2?'block':'none'}}>
                    <Page1></Page1>
                </div>
                <div style={{display:isShow===1?'block':'none'}}>
                    <Home></Home>
                </div> */}
                <Switch>
                    <Route component={Page1} path="/index/Page1"></Route>
                    <Route component={Home} path="/index/home"></Route> 
                </Switch>
              {/* ,BrowserRouter,Switch */}
            </div>
       
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
                Ant Design ©2018 Created by Ant UED
            </Footer>
            </Layout>
        </Layout>
        );
    };
  
  export default App;
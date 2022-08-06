import '../Admin/index.css'
import {Switch, useHistory} from 'react-router-dom'
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

    //所有菜单列表
    const docList =[
        {
            url:'/home',
            name:'首页'
        },
        {
            url:'/project1',
            name:'项目1'
        },
        {
            url:'/function1',
            name:'功能1'
        },
        {
            url:'/function2',
            name:'功能2'
        },
        {
            url:'/function3',
            name:'功能3'
        },
        {
            url:'/team1',
            name:'1团'
        },
        {
            url:'/team2',
            name:'2团'
        },
        {
            url:'/set',
            name:'设置'
        }
    ]
        //仅有权限菜单
        const getList = '/home,/project1,/function1,/function2,/set,/team2'//
        let getListArr = getList.split(',')
        console.log('getListArr',getListArr)
  
    let items = [
            getItem('首页', '1', <PieChartOutlined />,'','/home'),
            getItem('项目1', '2', <DesktopOutlined />,'','/project1'),
            getItem('项目2', 'sub1', <UserOutlined />, [
            getItem('功能1', '3','','','/function1'),
            getItem('功能2', '4','','','/function2'),
            getItem('功能3', '5','','','/function3'),
            ]),
            getItem('团队', 'sub2', <TeamOutlined />, [
            getItem('1团', '6','','','/team1'),
            getItem('2团', '8','','','/team2')]),
            getItem('设置', '9', <FileOutlined />,'','/set'),
    ];
    console.log('------allllllala' ,items)
  
    const savFilter = []
    items.map((item,index)=>{
        // console.log('item',item)
        if(!item.children){
            // console.log('getListArr::---index',index)
          
            if(getListArr.indexOf(item.url)>-1){
                savFilter.push(item)
                // savFilter.push(getItem(item.key,item.icon,item.children,item.label,item.url))
            }
        }else{
            console.log('------wp zou l zheli ' ,item)
        //    console.log('lalal------!!',item)
           let clonData = JSON.parse(JSON.stringify(item))
           Reflect.deleteProperty(clonData, 'children')
        // delete clonData.children
        //    console.log('---啦啦啦',item)
          let emptyArr = []
           item.children.forEach((item1,index) => {
            console.log('进来了---lalalla',item1)
               if(getListArr.indexOf(item1.url)>-1){
                //    if(!clonData.children){
                //        console.log('到了几次')
                //      clonData.children =[]
                //    }
                console.log('进来了---1',item1)
                    // (clonData.children).push(item1)
                    // // clonData.children.push(item1)
                    // emptyArr.push(getItem(item1.label,item1.key,item1.icon,item1.children,item1.url))
                    emptyArr.push(item1)
               }
              
           });
           if(emptyArr.length!=0){
                clonData.children=emptyArr;
           }
           console.log('clonData---',clonData.children)
           if(clonData.length!=0&&!!clonData.children){
                console.log('clonData----djakdadjakjdka',clonData)
                // savFilter.push(getItem(clonData))
                savFilter.push(clonData)
                // savFilter.push(getItem(clonData.label,clonData.key,clonData.icon,clonData.children,clonData.url))
            }
            // if(getListArr.indexOf(item.children.url)>-1){
            //     console.log('进来了---')
            //     // clonData.children=item.children
            //     // clonData.children.push(item.children)
            // }
        
        }   

    })
    // let savFilter1 = [
    //     getItem('首页', '1', <PieChartOutlined />,'','/home'),
    //     getItem('项目1', '2', <DesktopOutlined />,'','/project1'),
    //     getItem('项目2', 'sub1', <UserOutlined />, [
    //     getItem('功能1', '3','','','/function1'),
    //     getItem('功能2', '4','','','/function2'),
    //     getItem('功能3', '5','','','/function3'),
    //     ])]
    console.log('savFilter',savFilter)
    
//     function newItem(label, key, icon, children,url) {
//         return {
//         key,
//         icon,
//         children,
//         label,
//         url
//         };
// }
//     let newArr =[]
//     savFilter.map((item,index)=>{
//         if(!item.children){
          
//             console.log('---index',index,item.key,item.icon,item.children,item.label,item.url)
//             newArr.push(newItem(item.label,item.key,item.icon,item.children,item.url))
//         }else{

//         }
//     })
//     console.log('newArr',newArr)

// items=savFilter

function getItem1(label, key, icon, children,url) {
    return {
    key,
    icon,
    children,
    label,
    url
    };
}
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
            console.log(e,'e@@')
            switch(e.key){
                case '1':
                    console.log('jinlail--1')
                setIsShow(1);
                break;
                case '2':
                    console.log('jinlail--2')
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
              Bill is a cat.
                <div style={{display:isShow===1?'block':'none'}}>
                    <Page1></Page1>
                </div>
                <div style={{display:isShow===2?'block':'none'}}>
                    <Home></Home>
                </div>
                
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
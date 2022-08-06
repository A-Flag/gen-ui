import { Table } from 'antd';
import React, { 
    useState,
    createContext,
    useReducer
 } from 'react';
import  Children  from './Children';
import Redux from './Redux'
import Theme from './Theme'
import UseRef from './UseRef'
import UseMemo from './UseMemo'

const page1send =[{
    name:'lalal'
}]
export const Context = createContext();
//创建上下文
 const Page1sendText = {
    name:'zhangsan'
 }

 //useReducer
 //1
//  const [state,dispatch] =useReducer(
//      reducer,
//      {count:initialCount}
//  )
 //2
//  function init(initialCount){
//      return {count:initialCount};
//  }
// function reducer(state,action){
//     switch(action.type){
//         case 'increment':
//             return {count:state.count+1};
//         case 'decrement':
//             return {count:state.count-1};
//         case 'reset':
//             return init(action.payload);
//         default:
//             throw new Error()
//     }
// }
// function Counter({initialCount}){
//     const [state,dispatch] = useReducer(reducer,initialCount,init);
//     return(
//         <div>
//             <div>count:{state.count}</div>
//             <button onClick={()=>{dispatch({type:'reset',payload:initialCount})}}>reset</button>
//             <button onClick={()=>{dispatch({type:'decrement'})}}>
//             -
//             </button>
//             <button onClick={()=>{dispatch({type:'increment'})}}>
//             +
//             </button>
//         </div>

//     )
// }
// const theme = {
//     light:{
//         background:"red",
//         color:"#fffff"
//     },
//     dark:{
//         background:"yellow",
//         color:"#fffff"
//     }
// }
// function reducer(state,action){
//     if(action.type=='chage'){
//        return {
//            ...state,
//            dark:{
//                color:'red',
//                background:'#ccc'
//            }
//        }
//     }
// }

const Page1 = () =>{
//    const [state,dispatch] = useReducer(reducer,themes)
    const [count,dispatch]=useReducer((state,action)=>{
        switch(action){
            case 'increment':
                return state+1;
            case 'decrement':
                return state-1;
            case 'reset':
                return 0;
            default:
                // throw new Error()
                return state
        }
    },0)
    console.log('i am page1')
    return(
        <div>
            i am Page222

            <Context.Provider value={Page1sendText.name}>
                <Children initialState={100} lal={22}></Children>
            </Context.Provider>
             <div>count:{count}</div>
             {/* <button onClick={()=>{dispatch({type:'reset',payload:initialCount})}}>reset</button> */}
             <button onClick={()=>{dispatch('reset')}}>reset</button>
             {/* <button onClick={()=>{dispatch({type:'decrement'})}}> */}
             <button onClick={()=>dispatch('decrement')}>
             -
             </button>
             <button onClick={()=>dispatch('increment')}>
             +
             </button>
             <Redux></Redux>
            <Theme></Theme>
            <UseRef></UseRef>
            <UseMemo></UseMemo>
        </div>
    )
}
export default Page1
//副作用：react完成对dom更新之后执行，异步请求，（第一个处理函数，第二参数：数组[]只执行一次（[count:如果count发生改变的时候改变]））；
//事件点击的时候只能拿到上次结果，可以使用副作用；清除监听相关逻辑 return ()=>{},可以写多个

//useReducer:加减乘除，跨组件通讯
//useReducer有3个参数，第一个参数是处理状态，第二个状态起始值，第三个参数是状态初始化函数
//const [state,dispatch] = useReducer(reducer,initalArg,init)
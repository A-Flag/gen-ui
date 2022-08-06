import React,{ useReducer,useRef } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

const Page1 = () =>{
    //useRef取组件实例对象或者是DOM对象;它还可以“跨渲染周期”保存数据。
    const inputRef = useRef();
    const [items, dispatch] = useReducer((state,action)=> {
        switch(action.type){
            case 'add':
                return [...state,
                    {
                        id:state.length,
                        name:action.name
                    }]

            case 'remove':
                return state.filter((_,index) => index != action.index)

            case 'clear':
                return [];
            default:
                return state;
            }
    },[])
    
    const  handleSubmit=(event)=>{
        event.preventDefault();
        dispatch({
            type:'add',
            name:inputRef.current.value
        });
        inputRef.current.value = '';
    }
    console.log('--112131-')
    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Input ref={inputRef}/>
            </Form>
            <Button
                className="button is-danger"
                onClick={
                () => dispatch({type:'clear'})
            }>clear</Button>
            <ul>
                {items.map((item,index) => (
                   
                    <li className="section" key={item.id}>{item.name}
                   
                        <Button className="button" onClick={
                            () => dispatch({type:'remove',index})
                        }>X</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Page1
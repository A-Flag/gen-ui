import React, { 
    useState,
    useReducer
 } from 'react';




const Page1 = () =>{
     const init=(initialCount)=>{
        return {count:initialCount};
    }
    const [count,dispatch]=useReducer(
        (state,action)=>{
            console.log('state,action',state,action)
         switch(action.type){
            case 'increment':
                return {count:state.count+1};
            case 'decrement':
                return {count:state.count-1};
            case 'reset':
                return init(action.payload);
            default:
                throw new Error()
        }
    },{count:0})
    console.log('i am page1')
    return(
        <div>
      
             <div>redux---count:{count.count}</div>
             <button onClick={()=>{dispatch({type:'reset',payload:0})}}>reset</button>
             <button onClick={()=>{dispatch({type:'decrement'})}}>-</button>
             <button onClick={()=>{dispatch({type:'increment'})}}>
                 +
             </button>

        </div>
    )
}
export default Page1
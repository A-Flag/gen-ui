//看到“memo”这个字眼，很多人应该会想到memo方法(memo是一个高阶组件，它接收一个组件A作为参数并返回一个组件B，如果组件B的props(或其中的值)没有改变，则组件B会阻止组件A重新渲染。)。\
//这是一个高阶函数，它会返回一个函数组件，作用相当于PureComponent
//而useMemo的作用也有点像，只不过它不是作用在函数组件上，而是在一段逻辑上
//如果第二个参数为数值带参数[count]则函数组件每次被渲染，useMemo内的逻辑都会被执行。如果第二个参数为一个空数组，那么仅会在组件第一次被渲染时执行

//注意：useEffect是执行在渲染完成后，而useMemo则是在渲染期间执行的

// 1、useCallback优化针对于子组件渲染，返回值是函数。
// 2、useMemo优化针对于当前组件高开销的计算。返回值是缓存的变量。
import React, { useState, useEffect, useMemo, useRef,useCallback } from 'react';

export default function App(){
    const [count, setCount] = useState(0);

    const doubleCount = useMemo(() => {
        return 2 * count;
    }, [count]);
    
   const callback = useMemo(()=>{
        return () => {
            console.log('this is a callback');
        }
    }, [])
    callback()

    const callback1= useCallback(()=>{
        console.log('this is a callback');
    }, [])
  
  return (
    <>
     <button onClick={() => {setCount(count + 1)}}>Count: {count}, double: {doubleCount}</button>
    </>
  );
}


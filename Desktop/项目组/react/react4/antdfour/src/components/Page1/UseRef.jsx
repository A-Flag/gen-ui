// import React, { useState, useEffect, useMemo, useRef } from 'react';

// export default function App(props){
//   const [count, setCount] = useState(0);

//   const doubleCount = useMemo(() => {
//     return 2 * count;
//   }, [count]);

//   const couterRef = useRef();

//   useEffect(() => {
//     document.title = `The value is ${count}`;
//     console.log(couterRef.current,'222');
//   }, [count]);
  
//   return (
//     <>
   
//       <button ref={couterRef} onClick={() => {setCount(count + 1)}}>Count: {count}, double: {doubleCount}</button>
//       <div ref={couterRef}>123{count}</div>
//     </>
//   );
// }

import React, { useState, useEffect, useMemo, useRef } from 'react';

export default function App(props){
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return 2 * count;
  }, [count]);

  const timerID = useRef();
  
  useEffect(() => {
    timerID.current = setInterval(()=>{
        setCount(count => count + 1);
    }, 1000); 
  }, []);
  
  useEffect(()=>{
      if(count > 10){
          clearInterval(timerID.current);
      }
  });
  
  return (
    <>
      <button ref={timerID} onClick={() => {setCount(count + 1)}}>Count: {count}, double: {doubleCount}</button>
    </>
  );
}


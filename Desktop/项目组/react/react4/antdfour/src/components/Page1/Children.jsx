import React, {useContext} from 'react';
import { Context } from './index'
const Page2 = (props) =>{
    console.log('children--1',props)
    const page1sendText2=useContext(Context)
    console.log('---page1sendText',page1sendText2)
    return(
        <div>
            i am Page1--children
        </div>
    )
}
export default Page2
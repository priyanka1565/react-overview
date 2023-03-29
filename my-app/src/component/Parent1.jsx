import React, { useState } from 'react'
import Child2 from './Child2'


const Parent1 = () => {

  const [data,setData] = useState('')

  const parentToChild = () => {
    setData('This data is from parent component to child component')
    
  } 
    
  
  return (
    <div>
      <Child2 />
      <div>
        <button onClick={() =>parentToChild()}>Click Parent</button>
      </div>
    </div>
  )
}

export default Parent1
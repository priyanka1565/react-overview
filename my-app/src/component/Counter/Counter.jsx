import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0);

  
  const handleClick = () => {
    setCounter(counter+1)
  }
    // const [age, setAge] = useState()
    
    // const [email, setEmail] = useState();

    // const [address,setAdress] = useState()

    
  return (
    <div>
      <h2>Counter : {counter}</h2>

      <button onClick={handleClick}>Add</button>
      <button onClick={handleClick}>Sub 1</button>
    </div>
  );
}

export default Counter
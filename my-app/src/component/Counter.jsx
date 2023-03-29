import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
   
    const handleClcik = () => {
        setCount(count + 1)
        console.log(count)
    }
    const handleReduce = () => {
        setCount(count - 1);
        //console.log(count);
        
    }
  return (
      <div>
          <h1>Count:{ count}</h1>
      <button onClick={handleClcik}>
        Add 
      </button>
        <button onClick={handleReduce}>
          Reduce 
        </button>
      
    </div>
  );
}

export default Counter
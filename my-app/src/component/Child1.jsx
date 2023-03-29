import React, { useState } from 'react'

const Child1 = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const user = {
    name: "priyanka",
    email:"priyanka@gmail.com"
  }
  const handleClick = () => {
    props.send_data(user);
    
  }
  console.log(user)
  return (
      <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value) } />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Child1
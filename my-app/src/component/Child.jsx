import React, { useState } from 'react'

const Child = (props) => {
    const [name, setName] = useState("");
    const[email,setEmail] = useState("")

    const user = {
      name: name ? name : "priyanka",
      email:email?email : "priyanka@gmail.com",
    };

    console.log(user,"user----------------1")
    const handleClick = () => {
        props.send_data(user)
    }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
          />
          <input type="text"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
          />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Child
import React, { useState } from 'react'

import Child from './Child';
const Parent = () => {
     const [data, setData] = useState({
       name: "?",
       email: "?",
     });
     const send_data = (data) => {
       setData(data);
     };
  return (
    <div>
      <Child send_data={send_data} />
      <div>
        <h1>{data.name + "" + data.email}</h1>
      </div>
    </div>
  );
}

export default Parent
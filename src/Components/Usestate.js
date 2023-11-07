import React, { useState } from 'react'

function Usestate() {
    const[name,setname] = useState("Shubham");
    const changeName = () =>{
        setname("Bathla")
    }
    const[texts,setText] = useState();

    const[count,setCount] = useState(0);
  return (
    <div>
        <button onClick={changeName}>{name}</button>
        <form>
            <input
                type="text"
                value={texts}
                onChange = {(e) => setText(e.target.value)}
            />
            <p>{texts}</p>
        </form>

        

    </div>
  )
}

export default Usestate
import React, { useState } from 'react'

function DisableButton() {
    const[disable,setdisable] = useState("");
    const handleSubmit = (e) =>{
        setdisable(e.target.value);
    }
    const[divstatus, setdivstatus] = useState(false);
  return (
    <div>
        <form>
        <label>Name:</label><input type="text" onChange={handleSubmit}/>
        <button disabled={disable.length<1} type="submit">Submit</button>
        </form>

        {divstatus && (<div>This is visible now</div>)}
        <button onClick= {() => 
        setdivstatus(!divstatus)}>{divstatus?'Hide' : 'Show'}</button>
        
    </div>
  )
}

export default DisableButton
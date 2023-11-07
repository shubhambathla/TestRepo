import React, { useEffect, useState } from 'react'

function Useeffect() {
    const[count, setCount] = useState(0);
    
    useEffect( () => {
        console.log(`useeffect in use ${count}`);
    },[count])
    const increaseCount = () => {
        setCount(count+1);
    }
    const decreaseCount = () => {
        setCount(count-1);
    }
  return (
    <div>Useeffect
        <p>Value:</p>{count}
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default Useeffect
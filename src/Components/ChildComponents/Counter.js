import {React,useState} from 'react'

function Counter() {
    const[counter, setCounter] = useState(0);
    const handleDecrease = () => {
        setCounter(counter-1);
    }
    const handleIncrease = () => {
        setCounter(counter+1);
    }
    
  return (
    <div className='counter'>
        <button onClick={handleDecrease}>-</button><h1>{counter}</h1><button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter
import React, { useState } from 'react'
import memeData from './MemeData';

function MemeGenerator() {
    
    const [url, setUrl] = React.useState("");
    function getMemeData(event){
        event.preventDefault();
        const memeArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        setUrl(memeArray[randomNumber].url);
    }


    // const [ThingsArray, setThingsArray] = React.useState(["Thing 1","Thing 2"]);
   
    // const addOneMoreThing = () => {
    //     const newThingText = `Thing  ${ThingsArray.length + 1}`
    //     setThingsArray(prevState => [ ...prevState,newThingText])
    // }
    // const a = ThingsArray.map( item => <p>{item}</p> ) ;
  return (
    <div className='meme--container'>
        {/* <p>{url}</p>
        {a}
        <button onClick={addOneMoreThing}>Add Thing Item</button> */}
        <form className='form'>
            <input type="text" className='form--input' placeholder='Top text'/>
            <input type="text" className='form--input' placeholder='Bottom text'/>
            
            <button className='form--button' onClick={getMemeData}>Get a new meme</button>
        </form>
        <img src={url}/>
    </div>
  )
}

export default MemeGenerator
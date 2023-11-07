import React from 'react'

function AirCard(props) {
    // const num = [1,2,3,4,5];
    // const names = ["shub","bathla","shubham","shubhambathla"]
  return (
   
    <div className='card'>
        {props.openSpot === 0 && <div className='card--badge'>SOLD OUT</div>}
        <img className='card-image'  src={props.image}/>
        <div className='star-stats'>
            <img src={props.starimg}/>
            <span>{props.rating}</span>
            <span>({props.reviewCount})</span>
            <span>*{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><b>from ${props.price}</b>/person</p>

        {/* <h1>{num.map(n=>n*n)}</h1>
        <h1>{names.map((name)=>{
            return name[0].toUpperCase() + name.slice(1);
        })}</h1> */}
    </div>
 
  )
}

export default AirCard
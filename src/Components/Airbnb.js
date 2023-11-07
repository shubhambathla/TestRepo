import React from 'react'
import AirCard from './AirCard';
// import img1 from '../Asset/img1.webp';
import star from '../Asset/star.png';
import data from './data';
function Airbnb() {
    const cards = data.map((card)=>{
        return(
      
                <AirCard key={card.id}
                image={card.coverImg}
                starimg = {star}
                rating = {card.stats.rating}
                reviewCount = {card.stats.reviewCount}
                country={card.location}
                title = {card.title}
                price={card.price}
                openSpot={card.openSpots}
                />
        )
    })
  return (
    <div>
      <div className='cards--container'>
        {cards}
      </div>
        
    </div>
   
    
  )
}

export default Airbnb
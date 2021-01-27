import React, { useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Img1 from './images/img-9.jpg'
import Img2 from './images/img-2.jpg'
import Img3 from './images/img-3.jpg'
import Img4 from './images/img-4.jpg'
import Img5 from './images/img-8.jpg'
const Card = [
    {
        name:'Adventure',
        src : Img1,
        info:'Explore the hidden waterfall deep inside the Amazon Jungle',
        onClick : './Sign-up'
    },
    {
        name:'Luxury',
        src : Img2,
        info:'Travel through the islands of Bali in a Private Cruise',
        onClick : './Sign-up'
    },
    {
        name:'Mystery',
        src : Img3,
        info:'Set Sail in the Atlantic Ocean visiting Uncharted Waters ',
        onClick : './Sign-up'
    },
    {
        name:'Adventure',
        src : Img4,
        info:'Experience Football on Top of the Himalayan Moutains',
        onClick : './Sign-up'
    },
    {
        name:'Adrenaline',
        src : Img5,
        info:'Ride through the Sahara Desert on a guided camel tour',
        onClick : './Sign-up'
    }

]
export default function Cards() {
   
    return (
        <>
            <h1 className="title">Check out these EPIC Destinations!</h1>
            <div className="big-img">
                {Card.map((e, index)=>{
                   return <CardItem key={index} props={e}/>
                })}
            </div>
        </>
    )
}

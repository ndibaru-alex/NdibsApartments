import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
export default function Apartment ({apartment}) {
   const{name,slug,images,price} = apartment;
    return (
        <article className='apartment'>
            <div className='img-container'>
               <img src={images[3] || defaultImg} alt='three-bedroom'></img>
               <div className='price-top'>
                   <h6>Ksh{price}</h6>
                   <p>per month</p>
                   </div> 
                   <Link to={`/apartments/${slug}`} className='btn-primary room-link'>features</Link>
           </div> 
           <p className='apartment-info'>{name}</p>
            
        </article>
    )
}

import React from 'react'
import Every from '../Components/Every'

import {Link} from 'react-router-dom'
import ApartmentContainer from '../Components/ApartmentContainer'
export default function apartments() {
    return (
        <>
        <Every every='roomsHero'>
            <div>
        <Link to='/' className='btn-primary btn-apart'>back Home</Link>
        </div>
           
        
        </Every>
        <ApartmentContainer></ApartmentContainer>
        </>
        )
}
    
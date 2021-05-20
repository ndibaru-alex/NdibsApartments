import React from 'react'
import Every from '../Components/Every'
import Banner from '../Components/Banner'
import Apartment from './Apartment'

import {withApartmentConsumer} from '../context'

 function About({context}) {
    let {featuredApartments:apartments} = context;
        
        apartments =apartments.map(apartment =>{
            return <Apartment key={apartment.id} apartment={apartment}/>
        })
    return (
        <>
        <Every ev every='errorEvery'>
            <Banner title='Ndibs APartments for You'
            subtittle='Located in a serene environment  sorounded by nature and beautiful green scenary with a bautiful Nairobi view for 
            You. No agents to nag u each end month just proprty manager with  mutual contractual understanding on how to make 
            ur montly payments' >
                 <div>
            <div className='featured-apartment-center'>
                {apartments}
            </div>
            </div>
            </Banner>
            
        </Every>
       
        </>
    )
}
export default withApartmentConsumer(About)

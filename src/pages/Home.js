import React from 'react'
import Every from '../Components/Every'
import Banner from '../Components/Banner'
import Carousel from '../Components/Carousely'

import {Link} from 'react-router-dom'
import Featured from '../Components/featuredApart'
import Locale from '../Components/Locale'




export default function home() {
    return (
        <>
       <Every>
         
           <Banner title="Ndibs Apartments" subtittle='Exquisite Spacioues One $ Two bedroom Apartments Locate in a serene environment ' >
           <Link to="/apartments" className="btn-primary">our Apartments</Link>
           </Banner>
           <div className='caraselCont'>
               <Carousel></Carousel>
           </div>
                 
       </Every>
       
      <Featured></Featured>
       <Locale></Locale>
        </>
    )
}

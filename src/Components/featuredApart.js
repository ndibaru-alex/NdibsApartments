import React, { Component } from 'react'
import Apartment from '../pages/Apartment'
import Title from '../Components/Title'
import {ApartmentContext} from '../context'


export class featuredApart extends Component {

    static contextType =ApartmentContext;

    render() {
        let {featuredApartments:apartments} = this.context;
        
        apartments =apartments.map(apartment =>{
            return <Apartment key={apartment.id} apartment={apartment}/>
        })
        
        return (
            
            <section className='featured-Apartments'>
                <Title title='featured apartments'></Title>
               <div className='featured-apartment-center'>
                {apartments}
                </div> 
            </section>
        )
    }
}

export default featuredApart

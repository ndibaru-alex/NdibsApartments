import React from 'react'
import Apartment from '../pages/Apartment'

export default function ApartmentList({apartments}) {
    if(apartments.length === 0){
        return(
            <div className='empty-search'>
                <h3>No Apartmnts match your search parameter </h3>
            </div>
        )
    }
    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {apartments.map(item =>{
                    return<Apartment key={item.id} apartment={item}></Apartment>
                })}
            </div>
        </section>
    )
}

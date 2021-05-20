import React from 'react'
import {useContext} from 'react'
import {ApartmentContext} from '../context'

import Title from '../Components/Title'
const getUnique =(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}

export default function ApartmentFilter({apartments}) {
    const context = useContext(ApartmentContext)

    const {handleChange,type,price,minPrice,maxPrice}=context
    let types =getUnique(apartments,'type');
    types=['all',...types]

    types = types.map((item,index) =>{
        return <option value={item} key={index}>{item}</option>
    })

    return (
        
        <section className='filter-container'>
           <Title title='search Apartments'></Title> 
           <form className='filter-form'>
               <label htmlFor='type'>Apartment Type</label>
               <select name='type'
                id='type' 
                value={type}
                className='form-control'
                onChange={handleChange}
                >
                    {types}                      
                </select>
                <div className='form-group'>
                    <label htmlFor='price'>Rent ksh{price}</label>
                    <input type='range' name='price' min={minPrice}
                    max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'/>
                </div>
            
            </form> 
        </section>
    )
}

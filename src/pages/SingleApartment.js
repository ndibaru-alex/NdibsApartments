import React, { Component } from 'react'
import defaultBcg from '../images/details-2.jpeg'

import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import {ApartmentContext} from '../context'
import StyleEvery from '../Components/Styled'

export class SingleApartment extends Component {
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = ApartmentContext;

    render() {
        const {getApartment} = this.context;
        const apartment = getApartment(this.state.slug)
        if(!apartment){
            return <div className='error'>
                <h3>No such apartment could be found</h3>
                <Link to='/apartments' className='btn-primary'>Back to apartments</Link>
            </div>
        }
        const {name,
            price,
            type,
            available,
            description,
            extras
            ,images} =apartment;
        return (
            <>
            <StyleEvery img={images[0]}>
                <Banner title={`${name} Apartment`}>
                    <Link to='/apartments' className='btn-primary'>back to Apartments</Link>
                </Banner>
            </StyleEvery>
            <section className='single-apartment'>
                <div className='single-apartment-images'>
                    {images.map((item,index)=>{
                       return <img key={index} src={item} alt={name}></img>
                    })}
                </div>
                <div className='single-apartment-info '>
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6> price : ksh{price}</h6>
                        <h6> available:{available} </h6>
                        <h6> type:{type} Apartment</h6>

                    </article>
                </div>
            </section> 
            <section className='apartment-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                    {extras.map((item,index)=>{
                        return <li key={index}>-{item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

export default SingleApartment

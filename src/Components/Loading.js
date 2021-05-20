import React from 'react'
import Loading from '../images/gif/loading-arrow.gif'

export default function Loaing() {
    return (
        <div className='loading'>
            <h4>Apartments loading</h4>
            <img src={Loading} alt='Loading please wait'></img>
        </div>
    )
}

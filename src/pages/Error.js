import React from 'react'
import Every from '../Components/Every'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'

export default function () {
    return (
       <Every every='errorEvery'>
        <Banner title='404' subtittle='page not found'>
            <Link to='/'className='btn-primary'>Back Home</Link>
        </Banner>
       </Every>
    )
}

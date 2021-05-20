import React from 'react'
import front from '../images/frontm1.jpg'

export default function Locale() {
    return (
        <section >
            <div className=' row '>
                <div className='col-4 img-container1'>
                    <img src={front} alt=''></img>
                </div>
                <div id='locale' className='col-8 '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d4750.559160636846!2d36.77297125002671!3d-1.1858466057518566!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-1.1860574!2d36.7744151!4m3!3m2!1d-1.1858274!2d36.7744151!5e0!3m2!1sen!2ske!4v1617105441237!5m2!1sen!2ske" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" title=''></iframe>
                </div>
            </div>
        </section>
    )
}

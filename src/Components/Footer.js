import React from 'react'
import location from '../images/loc1.png'
import email from '../images/email1.png'
import call from '../images/call1.png'
import {Link} from 'react-router-dom'

export default function footer() {
    return (
        <section className='Footer'>
             
            <div className='footer-nav'>
                <article className='footer-article'>                   
                <ul className="nav-links show-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/apartments">Apartments</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    
                </ul>
                </article> 
                
               <article className='footer-article'>
                                <ul className="nav-links show-nav">
                              <li>
                                 <Link to='./contact'>
                                   <img src={location} alt='' />Location
                                </Link>
                                    </li>
                                
                                <li>
                                 <Link to='./contact'>
                                <img src={email} alt='' />alxgathege@gmail.com
                                 </Link>
                                </li>                                
                                
                               <li>
                                 <Link to='./contact'>
                                <img src={call} alt='' />(254)705 875 302
                                 </Link>
                                </li>
                                </ul> 
                                </article>  
                </div>
        </section>
    )
}

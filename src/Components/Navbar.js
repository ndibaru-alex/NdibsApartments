import React, { Component } from 'react'
import Logo from '../images/ndibslogo.png'
import location from '../images/loc1.png'
import email from '../images/email1.png'
import call from '../images/call1.png'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export class Navbar extends Component {

    state={

        isOpen:false,
        
    }
    handleToggle= ()=>{
        this.setState({isOpen: !this.state.isOpen})
    }
     

    render() {
        
        
        return (
          
            <nav>
                <div className='container1'>  
                <div className='navbar1 '>              
                    <div className='nav-center '>
                <div className='nav-header'>
                <Link to='/' >
                <img src={Logo} className='logoImg '></img>
                </Link>
                <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <FaAlignRight className="nav-icon"/>
                    </button>                    
                    </div>
                    <div >
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"} onClick={this.handleToggle}>
                                <span><li>
                                 <Link to='./contact'>
                                   <img src={location} />Location
                                </Link>
                                    </li>
                                </span>
                                <span><li>
                                 <Link to='./contact'>
                                <img src={email} />alxgathege@gmail.com
                                 </Link>
                                </li>                                
                                </span>
                                <span><li>
                                 <Link to='./contact'>
                                <img src={call} />(254)705 875 302
                                 </Link>
                                </li>
                                </span>
                                
                    </ul>

                    </div>
                    <div className=' b-card row'>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links "} onClick={this.handleToggle}>
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
                </div>
                
                </div> 
                </div>
                
                </div>

                
            </nav>
            
         
        )
    }
}

export default Navbar

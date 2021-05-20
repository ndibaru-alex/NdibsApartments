import React, { Component } from 'react'
import Every from '../Components/Every'
import Banner from '../Components/Banner'
import ContactForm from '../Components/ContactForm'
import {Link} from 'react-router-dom'
import Locale from '../Components/Locale'
export default class Contact extends Component {
    render() {
        return (
           <>
           <Every every='roomsHero'>
               <Banner title='You may reach us though the form below '></Banner>
           </Every>
           <ContactForm></ContactForm>
           <Locale></Locale>
           </>
        )
    }
}

import React from 'react'
import ApartmentFilter from './ApartmentFilter'
import ApartMentList from './ApartmentList'
import {withApartmentConsumer} from '../context'


function ApartmentContainer({context}) {

   const {sortedApartments,
    apartments}= context;

    return(
        <>
            <ApartmentFilter apartments={apartments}/>
            <ApartMentList apartments={sortedApartments}/>
            
        </>
    )
    
}
 
export default withApartmentConsumer(ApartmentContainer)
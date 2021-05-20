import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import sit from '../images/sitting.jpg'
import bed from '../images/bed.jpg'
import kit from '../images/kitchen.jpg'
import {withApartmentConsumer} from '../context'



 function Carousely({context}) {
 
 
      return (
        <div >
          
         <Carousel >
           
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={sit}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={bed}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={kit}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 

        </div>
    )
}
export default withApartmentConsumer(Carousely)

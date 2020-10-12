import React from "react";
//import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Logo from '../assets/images/details-1.jpeg';
import Logo1 from '../assets/images/details-2.jpeg';
import Logo2 from '../assets/images/details-3.jpeg';
function HOMEtest ()  {
    
        return (
          
            <Carousel>
            <Carousel.Item>
            
             <img src={Logo} alt="First slide" height={500} className="d-block w-100" />

              <Carousel.Caption>
                <h3>Underlit bed. This one is a must! ...</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Logo1} alt="First slide" height={500} className="d-block w-100" />
          
              <Carousel.Caption>
                <h3>Customers’ needs being our priority</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Logo2} alt="First slide" height={500} className="d-block w-100" />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        );
    
};

export default HOMEtest;
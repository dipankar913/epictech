import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assects/website1.jpg";
import img2 from "../assects/website2.jpg";


const Services = () => {
  return (
    <div>
       <Carousel infiniteLoop
        autoPlay 
        showStatus={false}
         showArrows={false}
         showThumbs={false}
         interval={1000}
         >

            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item3" />
                <p className='legend'>Peer-to-peer Stack</p>
            </div>

        </Carousel> 
    </div>
  )
}

export default Services
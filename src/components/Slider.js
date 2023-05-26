import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"

const Slider = ({ start }) => {
    return (
        //Since we install Bootstrap@4.6.0. we're accessing Carousel Component from it.
        <Carousel fade>
            {
                //Note: Here we're not using {} braces with map function instead () braces
                start.map((item, index) => 
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )
            }

        </Carousel>
    )
}

export default Slider
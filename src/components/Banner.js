import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ bannerEnd }) => {
    return (
        <Carousel fade>
            {bannerEnd.map((item, index) => (
                <Carousel.Item key={item.image} id="banner" interval={1500}>
                    <img src={item.image} alt={`${index} banner`} className='d-block w-100' id="bannerImage" />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                        <u>Read More</u>
                    </Carousel.Caption>
                </Carousel.Item>

            ))}
        </Carousel>
    )
}

export default Banner
import React from 'react'

//Object Destructuring at Parameter

const Offer = ({ src, link, index }) => {
    return <a href={link}> <img src={src} alt={`${index}  offer`} /></a>
}

export default Offer
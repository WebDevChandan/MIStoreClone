import React, { useState, useEffect } from 'react'
import NavCard from './NavCard.js'
import "../styles/NavOptions.css"

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, accessories, audio }) => {
    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle, setredmiPhoneToggle] = useState(false);
    const [tvToggle, settvToggle] = useState(false);
    const [laptopToggle, setlaptopToggle] = useState(false);
    const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] = useState(false);
    const [homeToggle, sethomeToggle] = useState(false);
    const [accessoriesToggle, setaccessoriesToggle] = useState(false);
    const [audioToggle, setaudioToggle] = useState(false);

    useEffect(() => {
        let getToggle = window.location.pathname;

        if (getToggle ==="/miphones")
            return setMiPhoneToggle(true);
        if (getToggle === "/redmiphones")
            return setredmiPhoneToggle(true);
        if (getToggle === "/tv")
            return settvToggle(true);
        if (getToggle === "/laptops")
            return setlaptopToggle(true);
        if (getToggle === "/lifestyle")
            return setfitnessAndLifeStyleToggle(true);
        if (getToggle === "/home")
            return sethomeToggle(true);
        if (getToggle === "/audio")
            return setaccessoriesToggle(true);
        if (getToggle === "/accessories")
            return setaudioToggle(true);
        
        //To Avoid Padding effect of NavOptions Component
        if (getToggle === "miphones" || "redmiphones" || "laptops" || "lifestyle" || "home" || "audio" || "accessories")
            document.querySelector('.navOptions').classList.add("hideNavOpt");
    }, [])
    

return (
    <div className='navOptions'>
        {miPhoneToggle ? miPhones.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}

        {redmiPhoneToggle ? redmiPhones.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}

        {tvToggle ? tv.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}

        {laptopToggle ? laptop.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}

        {fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}

        {homeToggle ? home.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}

        {accessoriesToggle ? accessories.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}

        {audioToggle ? audio.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        )) : null}
    </div>
)
}

export default NavOptions
import React from 'react'
import HotItemCard from './HotItemCard.js'
import '../styles/HotAccessories.css'

const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, homeDevice, homeCover, lifeStyleDevice, lifeStyleCover, mobileDevice, mobileCover }) => {
    return (
        <div className='HotAccessories'>
            {/* ACCESSORIES Cover */}
            <div>
                {/* If music route will present then show Music Cover */}
                <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileCover} alt="Cover" />
            </div>

            {/* Music Devices */}
            <div>
                {/* If music route will present then show Music Accessories */}
                {music && music.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {/* Smart Devices */}
                {smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {/* Home Devices */}
                {homeDevice && homeDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {/* Lifestyle Devices */}
                {lifeStyleDevice && lifeStyleDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {/* Mobile Devices */}
                {mobileDevice && mobileDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                ))}

                {/* Browse More Option */}
                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            </div>

        </div>
    )
}

export default HotAccessories
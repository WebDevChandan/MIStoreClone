import React from 'react'
import VideoCard from './VideoCard.js'
import '../styles/Videos.css'

const Videos = ({ videos }) => {
  return (
    <div className='videos'>
      {videos.map((item, index) => (
        <VideoCard key={item.image} name={item.name} image={item.image} index={index} />
      ))}

    </div>
  )
}

export default Videos
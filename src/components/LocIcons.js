import React from 'react'
import "../styles/style.css"
import images from "../assets/data/logosOtherBars.json"


export default function PicturesGallery() {

  return (

    <div className='locIcons'>
      <div className='locIconsWrapper'>

        {
        images && images.map((item, index) => 
          <div key={index} className="icons">
            <h2>{item.text}</h2>
            <img src={item.path} alt={item.text}></img>
          </div> 
          )
        }

      </div>
    </div>
  )
}

import React from 'react'
import "../styles/style.css"
import pictures from "../assets/data/picturesArchive.json"


export default function PicturesGallery() {

  return (

    <div className='picGallery'>
      <div className='picGalleryWrapper'>

        {
        pictures && pictures.map((item, index) => 
          <div key={index} className="pictures">
            <img src={item.path} alt={item.text}></img>
          </div> 
          )
        }

      </div>
    </div>
  )
}

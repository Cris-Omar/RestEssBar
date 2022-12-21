import React from 'react'
import { useState } from 'react';
import "../styles/style.css"
import FileUploadIcon from '../assets/icons/FileArrowUp'

export default function ContactFrom() {

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (

    <div className='contactForm'>
        <form>
          <div className='object'>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className='object'>
            <label>Email</label>
            <input type="text"></input>
          </div>
          <div className='object'>
          <label>Nachricht</label>
            <textarea rows={7} ></textarea>
          </div>
          <div className='fileUploadIcon'>
            <label>Datei hochladen</label>
            <FileUploadIcon value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])} />
          </div>

            <button type="submit">Senden</button>
        </form>
    </div>
  )
}

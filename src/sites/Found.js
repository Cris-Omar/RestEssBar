import React from 'react'
import "../styles/style.css"
import { Link } from 'react-router-dom';

//PDF import & handle
import AdobeReader from "../components/AdobeReader"
import RebGruenden from "../../src/assets/pdf/rebGruenden.pdf";

export default function Found() {

  return (
    <div className='found'>
        <h1>RestEssBar Gründen</h1>
        <h2>Möchtest du mithelfen, Food Waste zu vermeiden? Hast du etwas Zeit und möchtest dich engagieren?</h2>

        <p>
          Wir würden uns freuen, wenn viele weitere RestEssBars entstehen. 
          Es ist uns daher ein grosses Anliegen, dass wir unser Wissen weitergeben. 
          Hier findest du Infos zur Gründung und zum Aufbau einer RestEssBar. 
          Bitte beachte: Die Anleitung wird in den kommenden Wochen aktualisiert.
        </p>

        <div className="rebGruenden">
          <AdobeReader pdf={RebGruenden} />
        </div>
        
        <Link to={RebGruenden} target="_blank" download>Download</Link>
    </div>
  )
}

import React from 'react'
import "../styles/style.css"
import LocIcons from "../components/LocIcons"


export default function Locations() {
  return (
    <div className='locations'>
      <h1>Standorte</h1>
      <p>Behalte die Übersicht mit unserer interaktiven Karte</p>
      <p>Einfach auf die blauen Markierungen klicken und die Adresse der jeweiligen RestEssBar sowie deren Website wird angezeigt.</p>

      <LocIcons />

    </div>
  )
}

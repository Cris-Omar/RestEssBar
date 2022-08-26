import React from 'react'
import twint from "../assets/Twint.png"
import "../styles/style.css"

export default function Donate() {
  return (
    
    <div className='donate'>
        <h1>
          Spenden
        </h1>
        <h2>Vielen Dank, dass ihr unsere ehrenamtliche Arbeit unterstützt! 
          Möchtet ihr dem Dachverein RestEssBar Schweiz oder einer bestimmten RestEsstBar spenden?
        </h2>
        <p>Sucht ihr eure favorisierte RestEssBar, sind alle Standorte und die jeweiligen Spendeninformationen hier aufgelistet. 
          Falls ihr den Dachverband unterstützen möchtet, könnt ihr gerne die nachstehenden Infos verwenden:</p>

          <div className='donateInfo'>Spendenkonto Dachverband: IBAN-Nr. CH10 0839 0033 1103 1000 2
            Alternative Bank Schweiz, lautend auf: Verein RestEssBar Schweiz, 8400 Winterthur
          </div>

          <p>Oder ihr könnt ganz bequem mit eurem Handy die Twint-App öffnen und den untenstehenden QR-Code scannen, 
            um für den Dachverband RestEssBar Schweiz zu spenden.</p>

          <div className='twintImage'><img src={twint} alt="Twint" /></div>
    </div>
  )
}

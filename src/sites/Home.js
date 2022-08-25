import React from 'react'
import "../styles/Home.css"

export default function home() {
  return (
    <div className='home'>
        <h1>RestEssBar Schweiz</h1>
        <p>Der nationale Dachverband „RestEssBar Schweiz“ vertritt gesamtschweizerisch die Anliegen der verschiedenen RestEssBar-Standorte
        und fördert die Vernetzung zwischen den Mitgliedern sowie weiteren Organisationen im Bereich Food Waste. 
        Der Dachverband sowie die einzelnen RestEssBars arbeiten ausschliesslich ehrenamtlich.</p>

        <div className='greenTitle'>
          Bei Anliegen rund um Lebensmittelspenden in eurer Region könnt ihr euch direkt beim jeweiligen RestEssBar-Standort melden.
        </div>
        <h2>Essen retten – Reste essen!</h2>

        <p>In der Schweiz fallen jährlich 2.8 Millionen Tonnen Lebensmittelverluste an.
          Zwei Drittel davon wären vermeidbare Verluste, welche zum Zeitpunkt ihrer Entsorgung und bei rechtzeitiger Verwendung noch geniessbar wären.
          Das Projekt RestEssBar hat sich zum Ziel gesetzt, dem Lebensmittelwegwurf mit konkreten Massnahmen entgegenzuwirken. 
          Um dieses Ziel zu erreichen, schliessen sich engagierte Menschen zusammen und betreiben in ihrem Ort eine lokale und unabhängige RestEssBar. 
          Manche nennen ihr Projekt anders, alle verfolgen jedoch das gleiche Ziel. 
          Eine Übersicht über diese Projekte ist auf der Karte unten sowie im Menu „Standorte„ oben zu finden. 
          Allen RestEssBars gemeinsam ist das Manifest, das ihr gleich unten findet.</p>

          <h2>Manifest</h2>

          <p>Alle RestEssBars halten sich an folgendes Manifest:</p>

          <ul>
            <li>Gratis für alle</li>
            <li>Zugänglich für alle</li>
            <li>Nonprofit</li>
            <li>Konfessionell unabhängig</li>
            <li>Parteipolitisch unabhängig</li>
            <li>Einhaltung der Hygiene- und Gesundheitsstandards</li>
          </ul>

          <p>Der Name sollte den Ort beinhalten, also z. B. «RestEssBar Winti Altstadt»</p>
    </div>
  )
}

import React from 'react'
import "../styles/style.css"
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='home'>
        <h1>RestEssBar Schweiz</h1>
        <p>Der nationale Dachverband „RestEssBar Schweiz“ vertritt gesamtschweizerisch die Anliegen der verschiedenen RestEssBar-Standorte
        und fördert die Vernetzung zwischen den Mitgliedern sowie weiteren Organisationen im Bereich Food Waste. 
        Der Dachverband sowie die einzelnen RestEssBars arbeiten ausschliesslich ehrenamtlich.</p>

        <div className='greenTitle'>
          Bei Anliegen rund um Lebensmittelspenden in eurer Region könnt ihr euch direkt beim jeweiligen <Link to="/standorte">RestEssBar-Standort </Link>melden.
        </div>
        <h2>Essen retten – Reste essen!</h2>

        <p>In der Schweiz fallen jährlich 2.8 Millionen Tonnen Lebensmittelverluste an.
          Zwei Drittel davon wären vermeidbare Verluste, welche zum Zeitpunkt ihrer Entsorgung und bei rechtzeitiger Verwendung noch geniessbar wären.
          Das Projekt RestEssBar hat sich zum Ziel gesetzt, dem Lebensmittelwegwurf mit konkreten Massnahmen entgegenzuwirken. 
          Um dieses Ziel zu erreichen, <b>schliessen sich engagierte Menschen zusammen</b> und betreiben <b>in ihrem Ort eine lokale und unabhängige RestEssBar.</b> 
          Manche nennen ihr Projekt anders, alle verfolgen jedoch das gleiche Ziel. 
          Eine Übersicht über diese Projekte ist auf der Karte unten sowie im Menu <Link to="/Standorte">"Standorte"</Link> oben zu finden. 
          Allen RestEssBars gemeinsam ist das Manifest, das ihr gleich unten findet.
        </p>

        <p>Da die Idee „RestEssBar“ lokal bleiben und in die Breite wachsen soll, <b>unterstützen wir alle Interessierten</b> gerne mit Informationen.
          Mehr dazu findet ihr unter <Link to="/found">RestEssBar gründen</Link>.
        </p>

        <p>
        Die erste RestEssBar wurde Anfang 2014 in der Winterthurer Altstadt gegründet.
        Laufend kommen weitere lokale Projekte dazu.
        Mehr zur Entstehungsgeschichte der RestEssBars findet ihr unter <Link to="/about">über uns</Link>.
        </p>

          <h2>Manifest</h2>

          <p>Alle RestEssBars halten sich an folgendes Manifest:</p>

          <div className='manifest'>
            <ul>
              <li>Gratis für alle</li>
              <li>Zugänglich für alle</li>
              <li>Nonprofit</li>
              <li>Konfessionell unabhängig</li>
              <li>Parteipolitisch unabhängig</li>
              <li>Einhaltung der Hygiene- und Gesundheitsstandards</li>
            </ul>
          </div>

          <p>Der Name sollte den Ort beinhalten, also z. B. «RestEssBar Winti Altstadt»</p>
    </div>
  )
}

import React from 'react'
import "../../styles/style.css"

export default function About() {
    
  return (
    <div className='about'>
        <h1>Über uns</h1>
        <h2>Die Geschichte des Projektes RestEssBar – von der Gründung der RestEssBar in Winterthur zur schweizweiten Bewegung.</h2>

        <p>
          Anfangs 2014 hat Sarah Weibel im Dokumentarfilm «Ohne Geld Leben» von einem ersten Kühlschrank-Projekt «Fair-Teiler» in Deutschland erfahren, 
          in dem Leute Lebensmittel, die sie nicht mehr benötigen, in einem Kühlschrank anderen zur Verfügung stellen können.
          Sie fragte sich, warum es Ähnliches nicht auch bei uns gibt – gefragt getan.
          Einige Freunde wurden von Sarah zum gemütlichen Essen und Brainstorming eingeladen und noch nicht mal beim Dessert angelangt,
          stand es für Anne-Laurence Zingg, Florian Sprenger, Sarah Weibel, Seraina Fritzsche und Thomas Kuhn fest: Wir gründen die RestEssBar, 
          einen jederzeit für alle frei zugänglichen Kühlschrank, in dem Lebensmittel von verschiedensten Lebensmittelläden gesammelt werden.
        </p>

        <p>
        Bald nach der Vereinsgründung im Februar 2014 wurde uns aber bewusst: So einfach ist das nicht. 
        Gesetze und Gepflogenheiten machen es nicht einfach, etwas für eine vollständige Verwertung von Lebensmitteln zu unternehmen. 
        Es dauerte etwa zwei Monate, bis die Lebensmittelgesetze recherchiert, 
        die entsprechenden Formulare ausgefüllt und ein Standort sowie ein Kühlschrank gefunden wurden. 
        Dann war es endlich soweit: Die erste RestEssBar wurde im Herzen der Winterthurer Altstadt eröffnet. 
        Das Konzept RestEssBar wurde von Anfang an darauf angelegt, 
        in die Breite zu wachsen und über unabhängige Gruppen in anderen Städten grösser zu werden. Es war uns ein Anliegen, 
        dass das Projekt möglichst viele Nachahmer findet und sich zu einem Selbstläufer entwickelt. 
        In verschiedenen Informationsveranstaltungen geben wir seither unsere Erfahrungen und unser Wissen an andere Gruppen weiter.
        </p>
        <div className='members'>
          <ul>
            Co-Präsidium aktuell
            <li>Claudia Bucher</li>
            <li>Lisa-Maria Graf</li>
            <li>Sarah Weibel</li>
            <li>Sylvana Meli</li>
          </ul>
          <ul>
          Ehemalige Mitglieder
            <li>Adrian Pfäffli (2018-2021)</li>
            <li>Anne-Laurence Zinng (2014-2021)</li>
            <li>Florian Sprenger (2014-2020)</li>
            <li>Nicole Arni (2015-2020)</li>
            <li>Seraina Fritzsche (2014-2017)</li>
            <li>Thomas Kuhn (2014-2015)</li>
          </ul>
          <ul>
            Gründungsmitglieder
            <li>Anne-Laurence Zingg</li>
            <li>Florian Sprenger</li>
            <li>Sarah Weibel</li>
            <li>Seraina Fritzsche</li>
            <li>Thomas Kuhn</li>
          </ul>
        </div>
    </div>
  )
}

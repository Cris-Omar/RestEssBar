import React from 'react'
import "../styles/style.css"
import ContactForm from "../components/ContactForm"

export default function Contact() {

  return (
    <div className='contact'>
        <h1>Kontakt</h1>

        <h2>Wenn du eine Frage oder Inputs hast, schreib uns doch!</h2>

        <p>
          Wir freuen uns über Mitteilungen und Ideen! Da wir ein Team von Freiwilligen sind, kann es jedoch ein paar Tage dauern, 
          bis du eine Antwort von uns erhältst. Besten Dank fürs Verständnis!
        </p>
        <p>
          Hast du eine spezifische Frage zu einer RestEssBar? In diesem Fall kannst du dich direkt bei der entsprechenden RestEssBar melden.
        </p>

        <h2>Sende uns eine Nachricht</h2>

        <ContactForm />

    </div>
  )
}

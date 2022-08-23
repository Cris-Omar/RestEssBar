import React from 'react'
import "../styles/NavBar.css"
import logo from "../assets/LogoTransp.png"
import {Link} from "react-router-dom"


export default function navBar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <Link to="/"><img src={logo} alt="Logo"/></Link>
        </div>

        <div className='menu'>
            <Link to="/">RestEssBar CH</Link>
            <Link to="/">Standorte</Link>
            <Link to="/">RestEssBar Gründen</Link>
            <Link to="/">Spenden</Link>
            <Link to="/">Foodwaste-Netzwerk</Link>
            <Link to="contact">Kontakt</Link>
        </div>
    </div>
  )
}

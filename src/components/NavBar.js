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

            <div className='nav'>
              <Link to="/standorte">Standorte</Link>
              <div className='navContent'>
                <Link to="/">Baden Restessbar</Link>
                <Link to="/">Save our Food Davos </Link>
              </div>
            </div>
            <Link to="/restessbar-gruenden">RestEssBar Gründen</Link>
            <Link to="/spenden">Spenden</Link>
            <Link to="/foodwaste-netzwerk">Foodwaste-Netzwerk</Link>
            <Link to="/kontakt">Kontakt</Link>
        </div>
    </div>
  )
}
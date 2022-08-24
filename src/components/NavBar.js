import React, { useState } from 'react'
import "../styles/NavBar.css"
import logo from "../assets/LogoTransp.png"
import {Link} from "react-router-dom"


export default function NavBar() {

  //Open & close menu
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const [locOpen, setLocOpen] = useState(false)
  const handleLocOpen = () => setLocOpen(!locOpen)

  return (
  <div className='navbar'>
    <div className='logo'>
      <Link to="/"><img src={logo} alt="Logo"/></Link>
    </div>
    {/*big screen Navigation Menu starts here */}
    <div className='menu'>
      <div className='menuItem' onMouseEnter={handleOpen} onMouseLeave={handleOpen}>
        <Link to="/">RestEssBar CH <i class="fa-solid fa-angle-down"></i></Link>
        {open && (
          <div className='menuContent'>
            <div className='childItem'><Link to="/">Über uns</Link></div>
            <div className='childItem'><Link to="/">Medien</Link></div>
            <div className='childItem'><Link to="/">Bildarchiv</Link></div>
          </div>
          )}
          </div>
            <div className='menuItem' onMouseEnter={handleLocOpen} onMouseLeave={handleLocOpen}>
              <Link to="/standorte" >Standorte <i class="fa-solid fa-angle-down"></i></Link>
              {locOpen && (
                <div className='menuContent'>
                  <div className='childItem'><Link to="/">RestEssBar Baden</Link></div>
                  <div className='childItem'><Link to="/">Save our food Davos</Link></div>
                  <div className='childItem'><Link to="/">RestEssBarr Ebikon</Link></div>
                  <div className='childItem'><Link to="/">RestEssBarr Frauenfeld</Link></div>
                  <div className='childItem'><Link to="/">RestEssBarr Grenchen</Link></div>
                </div>
              )}
            </div>
            
            <div className="menuItem"><Link to="/restessbar-gruenden">RestEssBar Gründen</Link></div>
            <div className='menuItem'><Link to="/spenden">Spenden</Link></div>
            <div className='menuItem'><Link to="/foodwaste-netzwerk">Foodwaste-Netzwerk</Link></div>
            <div className='menuItem'><Link to="/kontakt">Kontakt</Link></div>
            {/*big screen Navigation Menu ends here */}
        </div>
                    {/*small screen Navigation Menu starts here */}
                    <div className='menuIcon' onClick={handleClick}>
              <i class={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            <div className='subMenu'>
              <ul><Link to="/">RestEssBar CH <i class="fa-solid fa-angle-down"></i></Link></ul>
              <ul><Link to="/standorte" >Standorte <i class="fa-solid fa-angle-down"></i></Link></ul>
              <ul><Link to="/restessbar-gruenden">RestEssBar Gründen</Link></ul>
              <ul><Link to="/foodwaste-netzwerk">Foodwaste-Netzwerk</Link></ul>
              <ul><Link to="/kontakt">Kontakt</Link></ul>
            </div>
  </div>
  )
}
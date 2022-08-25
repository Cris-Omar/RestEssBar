import React, { useState } from 'react'
import "../styles/NavBar.css"
import logo from "../assets/LogoTransp.png"
import {Link} from "react-router-dom"


export default function NavBar() {
  //dropdown for REBCH
  const [rebOpen, setRebOpen] = useState(false)
  const handleRebOpen = () => setRebOpen(!rebOpen)

  const [locOpen, setLocOpen] = useState(false)
  const handleLocOpen = () =>  {setLocOpen(!locOpen)}
  

  //Mobile Open & close menuIcon
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  //Mobile dropdown handle Open
  const [mobOpen, setMobOpen] = useState(false)
  const handleMobOpen = () => {setMobOpen(!mobOpen)}

  return (
  <div className='navbar'>
    <div className='logo'>
      <Link to="/"><img src={logo} alt="Logo"/></Link>
    </div>
    {/*big screen Navigation Menu starts here */}
    <div className='menu'>
      <div className='menuItem' onMouseEnter={handleRebOpen} onMouseLeave={handleRebOpen}>
        <Link to="/">RestEssBar CH <i class="fa-solid fa-angle-down"></i></Link>
        {rebOpen && (
          <div className='menuContent'>
            <li><Link to="/">~ Über uns ~</Link></li>
            <li><Link to="/">~ Medien ~</Link></li>
            <li><Link to="/">~ Bildarchiv ~</Link></li>
          </div>
          )}
          </div>
            <div className='menuItem' onMouseEnter={handleLocOpen} onMouseLeave={handleLocOpen}>
              <Link to="/standorte" >Standorte <i class="fa-solid fa-angle-down"></i></Link>
              {locOpen && (
                <div className='menuContent'>
                  <li><Link to="/">~ RestEssBar Baden ~</Link></li>
                  <li><Link to="/">~ Save our food Davos ~</Link></li>
                  <li><Link to="/">~ RestEssBarr Ebikon ~</Link></li>
                  <li><Link to="/">~ RestEssBarr Frauenfeld ~</Link></li>
                  <li><Link to="/">~ RestEssBarr Grenchen ~</Link></li>

                </div>
              )}
            </div>
          <div className="menuItem"><Link to="/restessbar-gruenden">RestEssBar Gründen</Link></div>
          <div className='menuItem'><Link to="/spenden">Spenden</Link></div>
          <div className='menuItem'><Link to="/foodwaste-netzwerk">Foodwaste-Netzwerk</Link></div>
          <div className='menuItem'><Link to="/kontakt">Kontakt</Link></div>
          {/*big screen Navigation Menu ends here */}

        {/*small screen Navigation Menu starts here */}

        <div className='menuIcon' onClick= {() => {handleClick(); handleMobOpen();}}>
          <i class={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          {mobOpen && (
          <div className='subMenu'>
            <li><Link to="/">RestEssBar CH <i class="fa-solid fa-angle-down"></i></Link></li>
            <li><Link to="/standorte" >Standorte <i class="fa-solid fa-angle-down"></i></Link></li>
            <li><Link to="/restessbar-gruenden">RestEssBar Gründen</Link></li>
            <li><Link to="/foodwaste-netzwerk">Foodwaste-Netzwerk</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </div>
          )}
        </div>
      </div>
  </div>
  )
}
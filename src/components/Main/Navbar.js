import React from 'react'
import logo from "./pic/Logo.png"
import pic4 from "./pic/Frame184.png"
import pic2 from "./pic/twitter.png"
import pic3 from "./pic/game.png" 
function Navbar() {
    return (
      <nav className='nav'>
        <div>
          <img className="logo" src={logo} alt='logo' />
        </div>
        <div className='list'>
          <ul className='ul'>
            <li>Story</li>
            <li>Roadmap</li>
            <li>Specs And Traits</li>
            <li >Team</li>
            <li>FaQ</li>
          </ul>
          <div className='icon1'>
            <img src={pic3} alt='lcon' />
          </div>
          <div className='icon2'>
            <img src={pic2} alt='icon2' />
             </div>
             <div className='board'>
  <img className='b-pic' src={pic4} alt='board'/>
             </div>
        </div>
        </nav>
    )
  }

export default Navbar
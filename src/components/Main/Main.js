import React from 'react'
import './Main.css';
import Navbar from './Navbar';
import Home from './Home';
function Main() {
  return (
    <>
    <div className="background-container">
      <Navbar/>
      <Home/>
      {/* <h2 className='scroll'>SCROLL FOR MORE</h2> */}

  </div>
    </>
  )
}

export default Main
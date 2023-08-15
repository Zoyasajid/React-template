import React from 'react'
import './Team.css';

function Team() {
  return (
    <div className='team'>
        <div className='team-div'>
            <div className='text'>
            <h1>TEAM.</h1>    
            <p>Following our tremendous ambitions and plowing our wave through the vast universe of the NFT, we wanted to establish a practical, sustainable, and strong membership network, so that our community can embrace all of the benefits of being a member of our exclusive club. Meet the crew behind Meta Moose!</p>
            </div>
        <div className='team-flex'>
            <div className='team-card'>
            <img src={require('./Teampic/Ellipse18.png')} alt="card" className="pic-cards"/>
            <h3>GIGI</h3>
            <p>Project Manager & Coordinator</p>
            </div>
            <div className='team-card'>
            <img src={require('./Teampic/Ellipse19.png')} alt="card" className="pic-cards"/>
            <h3>DR MOOSE</h3>
            <p>Project Manager & Marketing Lead</p>
            </div>
            <div className='team-card'>
            <img src={require('./Teampic/Ellipse20.png')} alt="card" className="pic-cards"/>
            <h3>JAKSON</h3>
            <p>Blockchain Advisor & Business Developer</p>
            </div>
            <div className='team-card'>
            <img src={require('./Teampic/Ellipse21.png')} alt="card" className="pic-cards"/>
            <h3>HOT MOOSE</h3>
            <p>Lead Developer & Tech</p>
            </div>
            <div className='team-card'>
            <img src={require('./Teampic/Ellipse22.png')} alt="card" className="pic-cards"/>
            <h3>NANA FAMOUS</h3>
            <p>Art Director & Creator of Moose</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Team
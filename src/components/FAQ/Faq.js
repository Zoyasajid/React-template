import React from 'react'
import './Faq.css';
// import pic2 from "/akar-icons_discord-fill.png"
function Faq() {
  return (
    <div className='faq'>
        <h1>FREQUENTLY ASKED QUESTIONS.</h1>    
        <div className='par'> 
        <div className='first'><h4>What is Meta Moose?</h4>
        <h5>△</h5>
        {/* <button><h5>&dt;</h5></button> */}
        </div>
        <p>Our adventure begins deep within the snowy forest. A herd of moose was peacefully living across the immense pond. They had no idea that the world was in grave danger and that it was time to move on, but not all of them were lucky. A bright star fell from the sky, bearing a vital message. Only ten of them will be given a second chance, 7 male and 3 female. It was time to move on to a new world, a new universe, the Metaverse.</p>
        </div>   
        <div className='para'>
            <h4>When are the presale and public sale? </h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>What is the total supply of the Meta Moose?</h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>How can I buy a Moose?</h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>What is the mint price?</h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>When is the reveal?</h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>What are the royalties?</h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>How many Moose are reserved?</h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>What are the benefits of owning a Moose?</h4>
        <h3>▽</h3>
        </div>
        <div className='para'>
            <h4>What does the team plan to do after launch? </h4>
        <h3>▽</h3>
        </div>
        <div className='ic'>
        <div className='icon1'>
        <img src={require('./pic/akar-icons_discord-fill.png')} alt="fireSpot" className="icon"/>
          </div>

          <div className='icon2'>
            <img src={require('./pic/akar-icons_twitter-fill.png')} alt="fireSpot" className="icon2"/>

             </div>
        </div>
             <h3 className='lop'> @2023 meta Moose</h3>
    </div>
  )
}

export default Faq
import React from 'react'
import homepic from "./pic/Heroimage.png"
function Home() {
  return (<>
    <div className='home'>
        <div className="text">
        <div className='textparaa'>
            <h2 className='textpara-h2'>Welcome to Meta Moose World </h2>
            <p className='textpara-p'>The woodland of Metaverse is home to 8,888 programmatically generated Moose. They are massive, majestic, 6 feet tall, and super strong. Meta Moose is lovingly crafted collection that is powered by the Ethereum Blockchain. Come have a look around!</p>
            <div>
                <button className='home-button btn1'>DISCORD</button>
                <button className='home-button btn2'>TWITTER</button>
            </div>
            </div>
        </div>
        <div className="pic">
            <img className="heroo" src={homepic} alt='hero'/>
        </div>

    </div>
    <div className='scroll-div'>
    <h2 className='scroll'>SCROLL FOR MORE</h2>
    <h2 className='scroll les'>▽</h2>
</div>
</>
  )
}

export default Home
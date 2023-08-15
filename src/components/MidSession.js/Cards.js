// import React from 'react'
// import './Cards.css';

// function Cards() {
//   const box =  document.querySelector(".disk-flex");
//   const preclick=()=>{
//     let width = box.clientWidth;
//     box.scrollLeft=box.scrollLeft - width
//     console.log(width)
//   }
//   const nextclick=()=>{
//     let width = box.clientWidth;
//     box.scrollLeft=box.scrollLeft + width
//     console.log(width)
//   }
//   return (
//     <div className='cards'>
// <button className='prebtn' onClick={preclick}><p>&lt;</p></button>
// <button className='nxtbtn' onClick={nextclick}><p> &gt;</p></button>

//  <div className='disk-flex'>
//  <img src={require('./pic/MetaMoos/0006.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0027.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0028.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0029.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0031.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0160.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/8880.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/8881.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/0160.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/0174.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/3555.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/3567.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/5402.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/8834.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/8881.png')} alt="fireSpot" className="pic-grid"/>
//  </div>
//   {/* <div className='disk-flex2'>
// <button className='prebtn' onClick={preclick}><p>&lt;</p></button>
// <button className='nxtbtn' onClick={nextclick}><p> &gt;</p></button>

//  <img src={require('./pic/MetaMoose/0160.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/0174.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/3555.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/3567.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/5402.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/8834.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoose/8881.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0006.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0027.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0028.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0029.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0031.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/0160.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/8880.png')} alt="fireSpot" className="pic-grid"/>
//  <img src={require('./pic/MetaMoos/8881.png')} alt="fireSpot" className="pic-grid"/>
//  {/* </div> */}

//     </div>
//   )
// }

// export default Cards




import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../cssComponents/slider.css'
import './Cards.css';

const images = [
 <img src={require('./pic/MetaMoos/0028.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoose/0160.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoose/0174.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoose/3555.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoose/3567.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoose/5402.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoose/8834.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoose/8881.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/0006.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/0027.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/0028.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/0029.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/0031.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/0160.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/8880.png')} alt="fireSpot" className="pic-grid"/>,
 <img src={require('./pic/MetaMoos/8881.png')} alt="fireSpot" className="pic-grid"/>

];

const Cards = () => {
    const settings = {
        spaceBetween:0,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed : 7000, // 2 seconds per slide
        pauseOnHover: true,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    
                }
            }
        ]
    }}
    export default Cards

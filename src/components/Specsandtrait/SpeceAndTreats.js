import React from "react";
import "./SpeceAndTreats.css";

function SpeceAndTreats() {
  return (
    <div className="speceandtreats">
      <div className="spece-flex">
        <div className="specetext">
          {/* <h2>Specs and Traits.</h2> */}
          <div className="ul-li-list">
          <h2>SPECE AND TRAITS</h2>
          <ul>
            <li>The purchase price of Moose will be 0.088ETH + gas fee.</li>
            <li>
              There will be 2222 Female Moose and 6666 Male Moose. Each Moose is
              custom-designed and developed with distinct characteristics.
            </li>

            <li>
              Every Moose is unique and algorithmically generated from more than
              200 possible traits! We specifically choose all 8 groups of
              traits: Background, Eyes, Mouth, Head, Fur, Clothes, Antlers, and
              Accessories.
            </li>
            <li>
              Some of them are rarer than the other, with 10 commanders being
              1/1 with unique traits that cannot be found in others.
            </li>
            <li>
              By purchasing a Moose, you become a member of the Country Club.
              You will not only have beautiful fine art but as well all creative
              and commercial rights.
            </li>
            <li>
              By being a member of Country Club you will have access to soooo
              many benefits and exclusive giveaways.
            </li>
            <li>
              We will be revealing the special utility that would bring so much
              value and make us unique in the sea of PFP NFT projects. Become a
              member and stay tuned to find out. You will not regret it! We
              promise.
            </li>
          </ul>
          </div>
        </div>
        <div className="specetext-pic">
        <img src={require('./pic/2011.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/2012.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/8889.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/8892.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/Untitled-1.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/Untitled-2.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/Untitled-3.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/Untitled.png')} alt="fireSpot" className="pic-griddd"/>
        <img src={require('./pic/8891.png')} alt="fireSpot" className="pic-griddd"/>
        </div>
      </div>
    </div>
  );
}

export default SpeceAndTreats;

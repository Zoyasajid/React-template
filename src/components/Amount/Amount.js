import React from 'react'
import './Amount.css';

function Amount() {
  return (
    <div className='amount'>
        <div className='amount2'>
            <div className='amount-form'>
              <div className="level">
              <h3>MINT YOUR MOUSE.</h3>
             <div className='level-Flex'>
               <h5>My balance: 0 ETH </h5>
              <p>connect wallet</p></div>
              </div>
              <div className='buy'>
                <h3>Amount to buy</h3>
                  <h5> -<input/>+ max</h5>
              </div>
              <div className='token'>
                <h5>Price per token</h5>
                <h6>0.000 ETH</h6>
              </div>
              <div className='total'>
              <div className='token2'>
                <h5>Total price</h5>
                <h6>0.000 ETH</h6>
              </div>  
              <button>mint</button>      
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Amount
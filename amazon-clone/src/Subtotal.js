import React from 'react'
import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
  return (
    <div className='subtotal'>
    <h1>Subtotal:-</h1>
    <button>Proceed to checkout</button>
    {/* <CurrencyFormat
        renderText={(value) =>{
            <>
                <p>Subtotal (0 items): <strong>0</strong></p>
                <small className='subtotal_gift'>
                    <input type="checkbox" />This order contains a gift
                </small>
            </>
        }}
    /> */}

    

    </div>
  );
}

export default Subtotal

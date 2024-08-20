import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import '../styles/QuantitySelector.css'

const QuantitySelector = ({ minQuantity = 1, maxQuantity = 5 }) => {
  // State to track the current quantity
  const [quantity, setQuantity] = useState(minQuantity);

  // Function to increase the quantity, ensuring it doesn't exceed the max quantity
  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  // Function to decrease the quantity, ensuring it doesn't go below the minimum quantity
  const decreaseQuantity = () => {
    if (quantity > minQuantity) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity-wrapper">
        <div className="quantity-selector">
            <button onClick={decreaseQuantity} disabled={quantity <= minQuantity}>
                <LuMinus className='icon'/>
            </button>
            <input
                type="text"
                value={quantity}
                readOnly
                style={{ width: '30px', textAlign: 'center', border: 'none', fontSize: '24px', fontWeight:'400'}}
            />
            <button onClick={increaseQuantity} disabled={quantity >= maxQuantity}>
                <FiPlus className='icon'/>
            </button>
        </div>
    </div>
   
  );
};

export default QuantitySelector;

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { TfiTrash } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, changeQuantity, totalItems, totalPrice } = useContext(CartContext);

  // Calculate total price
  // const totalPrice = cartItems.reduce((acc, item) => {
  //   return acc + item.price * item.quantity;
  // }, 0);

  // // Calculate total number of items
  // const totalItems = cartItems.reduce((acc, item) => {
  //   return acc + item.quantity;
  // }, 0);

  return (
    <div className='cart_container'>
      <div className='cart4'>
        <h2 className='totalItems'>Cart ({totalItems})</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className='cart-item' key={item.id}>
                <div className='img-btn'>
                  <div className='img-info'>
                    <img src={item.image} alt={item.Name} className='cart-item-image' />
                    <div className='itemName'>
                      <h3>{item.Name}</h3>
                      <p>In Stock</p>
                    </div>
                  </div>
                  <div className='tbtns'>
                    <button className='trash-btn' onClick={() => removeFromCart(item.id)}><TfiTrash className='trash' /> Remove</button>

                    <div className='quantity-selector2'>
                      <button onClick={() => changeQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                        <LuMinus className='quan2' />
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        style={{ width: '30px', textAlign: 'center', border: 'none', fontSize: '24px', fontWeight: '400' }}
                      />
                      <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>
                        <FiPlus className='quan2' />
                      </button>
                    </div>

                  </div>
                  <hr style={{ border: 'none', borderTop: '1px solid gray', width: '220%' }} />

                </div>
                <div className='cart-item-details'>
                  <div className='cart_info'>
                    <div className='itemPrice'>
                      <p className='it-price'>N{item.price}</p>
                      <div className='disco'>
                        <span className='faint'>N20.99</span>
                        <div className='percentd'><p>-5%</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className='cart-summary'>
        <div className='cart-total'>
          <div className='cart-total-title'>
            <h3>Cart Summary</h3>
            <hr style={{ border: 'none', borderTop: '1px solid gray', width: '406px' }} />
          </div>

          <div className='cart-total-title2'>
            <p>Sum-Total <span>N{totalPrice.toFixed(2)}</span></p>
            <hr style={{ border: 'none', borderTop: '1px solid gray', width: '406px' }} />
          </div>

          <div className='cart-total-title3'>
            <p>Discount <span>N100.00</span></p>
            <hr style={{ border: 'none', borderTop: '1px solid gray', width: '406px' }} />
          </div>
        </div>
        <Link to={`/components/Payment`}>
          <button className='checkout'>Checkout ({totalPrice.toFixed(2)})</button>
        </Link>
      </div>
    </div>

  );
};
export default Cart;
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { RiUserLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { BsHouseDoor } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import Confetti from 'react-confetti';
import '../styles/Payment.css';

const Payment = () => {
    const { cartItems, totalItems, totalPrice } = useContext(CartContext);
    // const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(false);

    // State for user details
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
        country: '',
    });

    const handlePaystackSuccessAction = (reference) => {
        alert('Payment successful!');
        console.log(reference);
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
            // navigate('/components/PaymentSuccess');
        }, 10000);
    };

    const handlePaystackCloseAction = () => {
        alert('Payment was not completed');
    };

    const payWithPaystack = () => {
        const handler = window.PaystackPop.setup({
            key: 'pk_test_fd13423b6889966e737c78568bbcf4e036eab19c',
            email: userDetails.email,
            amount: totalPrice * 100,
            currency: 'NGN',
            ref: `ref-${Math.floor(Math.random() * 1000000000 + 1)}`,
            callback: handlePaystackSuccessAction,
            onClose: handlePaystackCloseAction,
        });

        handler.openIframe();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    return (
        <div className='payment-all'>
            {showConfetti && <Confetti />}
            <div className="payment-container">
                <div className='payment-left'>
                    <div className='personal-info'>
                        <h2>Personal Information</h2>
                        <form>
                            <div className='name-info'>
                                Name<br />
                                <RiUserLine className='icon1' />
                                <input
                                    type="text"
                                    name="name"
                                    value={userDetails.name}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter Your Name'
                                    className='long'
                                />
                            </div>

                            <div className='email-number'>
                                <div className='email-info'>
                                    Email<br />
                                    <MdOutlineMailOutline className='icon2' />
                                    <input
                                        type="email"
                                        name="email"
                                        value={userDetails.email}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter Your email address'
                                        className='short1'
                                    />
                                </div>

                                <div className='number-info'>
                                    Phone Number<br />
                                    <IoCallOutline className='icon2' />
                                    <input
                                        type="text"
                                        name="phone"
                                        value={userDetails.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter Your phone number'
                                        className='short2'
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='shipping-info'>
                        <form>
                            <h2>Shipping Address</h2>
                            <div className='add-postal-info'>
                                <label>
                                    Address<br />
                                    <GrLocation className='icon3' />
                                    <input
                                        type="text"
                                        name="address"
                                        value={userDetails.address}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter Your address'
                                        className='address'
                                    />
                                </label>

                                <label>
                                    Postal Code<br />
                                    <HiOutlineMailOpen className='icon3' />
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={userDetails.postalCode}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter postal code'
                                        className='postal'
                                    />
                                </label>
                            </div>

                            <label>
                                City<br />
                                <BsHouseDoor className='icon4' />
                                <input
                                    type="text"
                                    name="city"
                                    value={userDetails.city}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter Your city'
                                    className='long'
                                />
                            </label>

                            <br />

                            <label>
                                Country<br />
                                <TbWorld className='icon5' />
                                <input
                                    type="text"
                                    name="country"
                                    value={userDetails.country}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter Your country'
                                    className='long'
                                />
                            </label>
                        </form>
                    </div>
                </div>
                <div className='right-payment'>

                    <div className='payment-method'>
                        <h2 className='pay-meth'>Payment Method</h2>
                        <div className={`online ${cartItems === cartItems.id ? 'clicked' : ''}`}
                        >
                            <p>Pay online</p>
                            <TiCreditCard className='online-icon' />
                        </div>
                        <div className={`online ${cartItems === cartItems.id ? 'clicked' : ''}`}
                        >
                            <p>Payment on delivery</p>
                            <TbTruckDelivery className='online-icon' />
                        </div>
                    </div>

                    <br />

                    <div className="payment-right">
                        <h2 className='payItems'>Items</h2>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.Name} />
                                    <div className='pay-item-info'>
                                        <p className='p2'>{item.Name}</p>
                                        <p className='p3'>Qty: {item.quantity}pcs</p>
                                        <p className='p4'>Type: {item.type}</p>
                                        <hr style={{
                                            border: 'none', borderTop: '1px solid gray', width: '360%', marginTop: '30px', position: 'relative',
                                            right: '80px'
                                        }} />

                                    </div>

                                    <br />
                                    <p className='p1'>N{item.price}</p>
                                </li>
                            ))}
                        </ul>

                        <p className='span-1'>Subtotal  <span>N{totalPrice.toFixed(2)}</span></p>
                        <p className='span-2'>Discount <span>N100.00</span></p>
                        <p className='span-3'>Shipping <span>N2,000</span></p>
                        <p className='span-4'>Total <span>N{totalPrice.toFixed(2)}</span></p>
                        <button className='payBtn' onClick={payWithPaystack}>Pay ({totalPrice.toFixed(2)})</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;

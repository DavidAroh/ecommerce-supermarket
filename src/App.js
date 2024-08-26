import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import ProductDescription from './pages/ProductDescription';
import { CartProvider } from './context/CartContext';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';

const App = () => {
  // const [cartItems, setCartItems] = useState([]);

  // const addtocart = (product) => {
  //   setCartItems([...cart, {...product, qty:1}])
  //   console.log(cart)
  // };


  return (
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pages/ProductPage" element={<ProductPage  />}/>
          <Route path="/pages/ProductDescription" element={<ProductDescription  />}/>
          <Route path="/components/Cart" element={<Cart  />}/>
          <Route path="/components/Payment" element={<Payment  />}/>
          <Route path="/components/PaymentSuccess" element={<PaymentSuccess  />}/>
        </Routes>
      </Router>
    </CartProvider>
    
  )
}

export default App

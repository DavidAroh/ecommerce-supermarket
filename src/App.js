import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import ProductDescription from './pages/ProductDescription';

const App = () => {
  const [cart, setCart] = useState([]);

  const addtocart = (product) => {
    setCart([...cart, {...product, qty:1}])
    console.log(cart)
  };


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage addtocart={addtocart} cart={cart} setCart={setCart} />} />
        <Route path="/pages/ProductPage" element={<ProductPage addtocart={addtocart} />}/>
        <Route path="/pages/ProductDescription" element={<ProductDescription addtocart={addtocart} />}/>
        <Route path="/components/Cart" element={<Cart addtocart={addtocart} cart={cart} setCart={setCart}/>}/>
      </Routes>
    </Router>
  )
}

export default App

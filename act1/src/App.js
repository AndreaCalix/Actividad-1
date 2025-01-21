import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import CartPage from './components/CartPage'; 
import CheckoutPage from './components/CheckoutPage';
import FavoritesPage from './components/FavoritesPage';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<BooksPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

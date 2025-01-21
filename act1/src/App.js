import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import CartPage from './components/CartPage'; 
import CheckoutPage from './components/CheckoutPage';
import FavoritesPage from './components/FavoritesPage';
import SubscribePage from './components/SubscribeForm';
import AdminLogin from './components/AdminLogin'; 
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null); 


  const showNotification = (message, type = 'success') => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000); 
  };

  return (
    <Router>
      <div className="App">
       
        {notification && (
          <div className={`alert alert-${notification.type}`} role="alert">
            {notification.message}
          </div>
        )}

        <Routes> 
          <Route 
            path="/" 
            element={<BooksPage cart={cart} setCart={setCart} showNotification={showNotification} />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage cart={cart} setCart={setCart} />} 
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

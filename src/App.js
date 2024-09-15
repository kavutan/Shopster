import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import Wishlist from './pages/Wishlist';
import MyOrders from './pages/MyOrders';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<LoginForm />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import MyOrders from './pages/MyOrders';
import Wishlist from './pages/Wishlist';
import Chekout from './pages/Chekout';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/chekout" element={<Chekout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




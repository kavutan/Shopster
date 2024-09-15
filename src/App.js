import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import Wishlist from './pages/Wishlist';
import MyOrders from './pages/MyOrders';
function App() {

const sampleWishlistItems = [
  {
    name: 'Мобільний телефон Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793RX/A)',
    price: '100₴',
    image: 'https://via.placeholder.com/75',
    addedDate: '01.01.2024',
    status: 'В наявності',
  },
  {
    name: 'Мобільний телефон Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793RX/A)',
    price: '200₴',
    image: 'https://via.placeholder.com/75',
    addedDate: '02.01.2024',
    status: 'Очікується',
  },
];


  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'login':
      case 'register':
      case 'login-form':
        return <LoginForm />;
      case 'wishlist':
        return <Wishlist setCurrentPage={setCurrentPage} wishlistItems={sampleWishlistItems} />;
      default:
        return <HomePage />;
    }
  };

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




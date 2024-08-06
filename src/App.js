import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
    <Header setCurrentPage={setCurrentPage} />
    {renderPage()}
    <Footer />
    </div>
  
  );
}

export default App;



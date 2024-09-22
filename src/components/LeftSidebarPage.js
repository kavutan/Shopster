import React, { useState, useEffect, useRef } from 'react';
import LeftSidebar from '../components/LeftSidebar'; 
import '../styles/Left-sidebar-page.css';

const LeftSidebarPage = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const sidebarRef = useRef(null);

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
    setIsSidebarOpen(false); // закриваємо бічну панель в загальному стані
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarVisible(false);
        setIsSidebarOpen(false); // закриваємо бічну панель в загальному стані
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="left-sidebar-page">
      {isSidebarVisible && (
        <>
          <div ref={sidebarRef}>
            <LeftSidebar />
          </div>
          <button className="close-button" onClick={handleCloseSidebar}>
            <div className="cross"></div>
          </button>
        </>
      )}
    </div>
  );
};

export default LeftSidebarPage;

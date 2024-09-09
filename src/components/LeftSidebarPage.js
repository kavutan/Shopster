import React, { useState } from 'react';
import LeftSidebar from '../components/LeftSidebar'; 
import '../styles/Left-sidebar-page.css';

const LeftSidebarPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="left-sidebar-page"> 
      {isSidebarVisible && (
        <>
          
          <LeftSidebar />
          <button className="close-button" onClick={handleCloseSidebar}>
            <div className="cross"></div>
          </button>
        </>
      )}
      </div>
  );
};

export default LeftSidebarPage;



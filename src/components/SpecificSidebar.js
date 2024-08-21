import React from 'react';
import LeftSidebar from './LeftSidebar'; 
import '../styles/Page-specific-sidebar.css';

const SpecificSidebarPage = () => {
  return (
    <div className="page-specific-sidebar">
      <LeftSidebar />
    </div>
  );
};

export default SpecificSidebarPage;

import React from 'react';
import '../styles/Menu-category-banner.css';
import LeftSidebar from './LeftSidebar'; 
import Banner1 from './Banner1';

function MenuCategoryBanner() {
  return (
    <div className="menu-category-banner"> 
      <LeftSidebar />
      <Banner1 />
    </div>
  );
}

export default MenuCategoryBanner;

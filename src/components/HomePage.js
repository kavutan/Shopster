import React from 'react';
import '../styles/HomePage.css';
import MenuCategoryBanner from './MenuCategoryBanner';
import Tabitems_horisontal from './Tabitems_horisontal';
function HomePage() {
  return (
    <div className="HomePage">
      <MenuCategoryBanner />
      <Tabitems_horisontal/>
    </div>
  );
}

export default HomePage;


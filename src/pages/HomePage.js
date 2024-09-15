import React from 'react';
import '../styles/HomePage.css';
import MenuCategoryBanner from '../components/MenuCategoryBanner';
import Tabitems_horisontal from '../components/Tabitems_horisontal';
function HomePage() {
  return (
    <div className="HomePage">
      <MenuCategoryBanner />
      <Tabitems_horisontal/>
    </div>
  );
}

export default HomePage;



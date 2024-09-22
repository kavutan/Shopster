import React from 'react';
import '../styles/HomePage.css';
import MenuCategoryBanner from '../components/MenuCategoryBanner';
import Tabitems_horisontal from '../components/Tabitems_horisontal';
import Latestoffers from '../components/Latestoffers';

function HomePage() {
  return (
    <div className="HomePage">
      <MenuCategoryBanner />
      <Tabitems_horisontal/>
      <Latestoffers/>
    </div>
  );
}

export default HomePage;



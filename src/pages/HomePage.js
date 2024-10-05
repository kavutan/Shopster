import React from 'react';
import '../styles/HomePage.css';
import MenuCategoryBanner from '../components/MenuCategoryBanner';
import Tabitems_horisontal from '../components/Tabitems_horisontal';
import Latestoffers from '../components/Latestoffers';
import Banner1300x112 from '../components/Banner1300x112';
import BannerCards from '../components/BannerCards';


function HomePage() {
  return (
    <div className="HomePage">
      <MenuCategoryBanner />
      <Tabitems_horisontal/>
      <Latestoffers/>
      <Banner1300x112/>
      <BannerCards/>
    </div>
  );
}

export default HomePage;



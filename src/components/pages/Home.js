import React from 'react';
import '../../App.css';
import BuyElf from '../BuyElf';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import TeamSection from '../TeamSection';
import StorySection from '../StorySection';
import RoadMap from '../RoadMap';
import FAQ from '../FAQ';

function Home() {
  return (
    <>
      <HeroSection />
      <BuyElf />
      <TeamSection />
      <StorySection />
      <RoadMap />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;

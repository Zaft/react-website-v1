import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Row from 'react-bootstrap/Row'

function HeroSection() {
  return (
    <div className='hero-container xxl'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className="elf-wrapper">
        <img className="elf-1" src="images/elf1.png" alt="Elf 1" />
      </div>
      <img className="mountain-sunburst" src="images/mountain-sunburst2.svg" alt="mountain sunburst" />
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;

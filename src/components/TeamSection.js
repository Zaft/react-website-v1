import React from 'react';
import '../App.css';
import { Button } from './Button';
import './TeamSection.css';
import Row from 'react-bootstrap/Row'

function TeamSection() {
  return (
    <div className='team-section'>
        <div className="video-container">
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        </div>
        <div className="team-mountain-sunburst-wrapper">
            <img className="team-mountain-sunburst" src="images/team-section-mountains.png" alt="mountains" />
        </div>
    </div>
  );
}

export default TeamSection;

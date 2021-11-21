import React from 'react';
import './BuyElf.css';
import CardItem from './CardItem';

function BuyElf() {
  return (
    <div className="buy-elf">
      <div className="buy-elf-container">
        <img className="buy-mountains" src="images/buy-section-mountains.png" alt="mountains"></img>
        <h1>Buy an Elf!</h1>
        <p>Elves will be available to buy blah blah blah...</p>
        <div className='cards__container'>
          <div className='cards__wrapper'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyElf;

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2() {
  return (
    <div className='cards'>
      <h1>Check out Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Full Responsive Websites'
              label='Web App'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Mobile Application for both IOS & Android'
              label='Mobile App'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Software as your per your Requirement'
              label='Software'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Digital Marketing & Seo'
              label='Digital Web'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='AI Solutions'
              label='AI'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;

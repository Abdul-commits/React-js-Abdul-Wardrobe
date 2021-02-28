import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Awesome Technologies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the world of Web Technologies'
              label='Website App'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='AI is bringing a whole new world for you'
              label='AI'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='What is so cool about Machine Learning?'
              label='Machine Learning'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='What are the top trends in Technology World'
              label='Technology'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Make you way in Software Engineering with us'
              label='Software Engineering'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

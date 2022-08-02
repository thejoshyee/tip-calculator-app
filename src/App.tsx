import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className='main__wrapper'>
      <div className='header__title'>
        <p className="title__top">SPLI</p>
        <p className="title__bottom">TTER</p>
      </div>

      <div className='calc-card'>
      
        <div className='calc-card__input-container'>
          <div className='calc-card__bill-amt-container'>
            <p className='calc-card__bill-title'>Bill</p>
            <input className='calc-card__bill-input'></input>
          </div>

          <div className='calc-card__tip-container'>
            <p className='calc-card__tip-title'>Select Tip %</p>
            <div className='calc-card__percentage-container'>
              <p className="calc-card__percentage">5%</p>
              <p className="calc-card__percentage">10%</p>
              <p className="calc-card__percentage">15%</p>
              <p className="calc-card__percentage">25%</p>
              <p className="calc-card__percentage">50%</p>
              <p className="calc-card__percentage custom">Custom</p>
            </div>
          </div>

          <div className='calc-card__people-num-container'>
            <p className="calc-card__people-title">Number of People</p>
            <input></input>
          </div>
        </div>

        <div className='calc-card__total-container'>
          
          <div className='calc-card__tip-amt-container'>
            <div className="calc-card__tip-amt-title-container">
              <p className='calc-card__tip-amount-title'>Tip Amount</p>
              <p className='calc-card__tip-amount-subtitle'>/ person</p>
            </div>
              <p className='calc-card__tip-amt-total'>0.00</p>
          </div>


          <div className='calc-card__total'>

            <div className='calc-card__total-title-container'>
              <p className='calc-card__total-title'>Total</p>
              <p className='calc-card__total-subtitle'>/ person</p>
            </div>

              <p className='calc-card__total-amt'>0.00</p>

          </div>

          <div className='calc-card__btn--reset'>Reset</div>
        </div>

      </div>
    </div>
  );
}

export default App;

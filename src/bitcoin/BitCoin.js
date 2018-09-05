import React, { Component } from 'react';
import './BitCoin.css';

class BitCoin extends Component {

  constructor(){
    super();
    this.state = {
      'bitcoin':null
    };
  }

  componentDidMount=()=>{
    // fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(customers=>{
    //   console.log('Vivek'); 
    //   console.log(customers.json()); 
    //  // this.setState({'bitcoin':customers});
    // });
  }

  render() {
    return (
      <div className="bitcoin">
        VIvek
      </div>
    );
  }
}

export default BitCoin;

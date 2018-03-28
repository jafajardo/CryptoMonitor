import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoPrice from './cryptoPrice';

class CryptoPriceDashboard extends Component {
  renderDashboard = (prices, currency, sampleSize, exchange) => {
    return (
      prices.map(price => {
        
      })
    );
  }
  
  render () {
    const { prices, currency, sampleSize, exchange } = this.props;

    return (
      <div>
        Dashboard!
      </div>
    );
  }
}
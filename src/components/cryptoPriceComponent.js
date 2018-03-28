import React, { Component } from 'react';
import CryptoPrice from './cryptoPrice';

class CryptoPriceComponent extends Component {
  renderCryptoPrice = (cryptoList) => {
    if (cryptoList && cryptoList.length > 0) {
      return (
        <div className="row">
        {
          cryptoList.map((crypto, index) => {
            return (
              <CryptoPrice 
                key={index}
                crypto={crypto.Symbol}
                currency="USD"
                sampleSize="60"
              />
            )
          })
        }
        </div>
      )
    }
  }

  render () {
    if (this.props.cryptoToWatch) {
      const { cryptoToWatch } = this.props;
      return (
        <div className="card-group">
          {this.renderCryptoPrice(this.props.cryptoToWatch)}
        </div>
      );
    }
    return (<div></div>)
  }
}

export default CryptoPriceComponent;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import * as actions from '../actions';

class CryptoPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: props.crypto,
      currency: props.currency,
      sampleSize: props.sampleSize,
      exchange: props.exchange
    }
  }

  componentWillMount = () => {
    this.props.getPricingHistoryPerMinute(this.state.crypto, this.state.currency, this.state.sampleSize, this.state.exchange);
  }

  render = () => {
    const { cryptoPricePerMinute } = this.props;
    const cryptoPrice = cryptoPricePerMinute.filter(f => f.symbol === this.state.crypto)[0]

    let labels = new Array();
    let data = new Array();
    let ave = new Array();
    let lastPrice = 0;
    if (cryptoPrice) {
      cryptoPrice.data.map((price, index) => {
        labels.push('');
        data.push(price.close);
        ave.push((price.high + price.low) / 2);

        if (index = cryptoPricePerMinute.length - 1) {
          lastPrice = price.close;
        }
      })
    }

    const graphData = {
      labels,
      datasets: [{
        label: `${this.state.crypto} PRICE` ,
        backgroundColor: ['rgba(54, 162, 235, 0.4)'],
        borderColor: ['rgba(54, 162, 235, 0.4)'],
        data
      },
      {
        label: `${this.state.crypto} AVERAGE`,
        backgroundColor: ['rgba(255, 99, 132, 0.4)'],
        borderColor: ['rgba(255, 99, 132, 0.4)'],
        data: ave,
        lineTension: false
      }]
    }

    return (
      <div className="card card-inverse text-center cryptoCard cardInverse">
        <div className="card-block">
          <h2 className="card-title">{this.state.crypto}</h2>
          <h3 className="card-text">{lastPrice} {this.state.currency}</h3>
          {this.state.exchange}
        </div>
        {/* <div className="card-block">
          <Line 
            data={graphData}
          />
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cryptoPricePerMinute: state.cryptoPriceReducer.cryptoPricePerMinute
  }
}

export default connect(mapStateToProps, actions)(CryptoPrice);
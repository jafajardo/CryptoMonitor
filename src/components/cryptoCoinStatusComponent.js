import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoCoinStatus from './cryptoCoinStatus';
import * as actions from '../actions';

class CryptoCoinStatusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CryptoToWatch: this.props.cryptoToWatch
    }
  }

  componentDidMount() {
    this.props.getWhatToMineCryptocurrencyStatus();
  }

  renderCryptoCoinStatus = (whatToMineCryptocurrencyStatus, cryptoToWatch) => {
    if (cryptoToWatch && cryptoToWatch.length > 0 && whatToMineCryptocurrencyStatus) {
      return (
        <div className="row elementRowPadding">
        {
          cryptoToWatch.map((crypto, index) => {
            const currencyStatus = whatToMineCryptocurrencyStatus[crypto.Name];
            if (currencyStatus) {
              const displayDifficulty = currencyStatus.difficulty / 1000000;
              return (
                <CryptoCoinStatus 
                  key={index}
                  cryptocurrency={crypto.Name}
                  difficulty={`${displayDifficulty}M`}
                  blockTime={currencyStatus.block_time}
                  blockReward={currencyStatus.block_reward}
                />
              );
            }
          })
        }
        </div>
      )
    }
  }

  render() {
    const { whatToMineCryptocurrencyStatus, cryptoToWatch } = this.props;
    return (
      <div className="fixed-bottom">
        {this.renderCryptoCoinStatus(whatToMineCryptocurrencyStatus, cryptoToWatch)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    whatToMineCryptocurrencyStatus: state.cryptoCoinStatusReducer.whatToMineCryptocurrencyStatus
  }
}
export default connect(mapStateToProps, actions)(CryptoCoinStatusComponent);
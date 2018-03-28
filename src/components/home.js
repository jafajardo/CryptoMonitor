import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import EthBalance from './ethBalance';
import MinerStatus from './minerStatus';
import CryptoPrice from './cryptoPrice';
import CryptoPriceComponent from './cryptoPriceComponent';
import CryptoCoinStatus from './cryptoCoinStatus';
import CryptoCoinStatusComponent from './cryptoCoinStatusComponent';
import MinerStatusComponent from './minerStatusComponent';
import * as actions from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }
  }

  componentWillMount() {
    this.props.loginUser('user1');
  }

  onAddressBarChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  render () {
    if (this.props.loginCredential) {
      return (
        <div>
          <CryptoPriceComponent 
            cryptoToWatch={this.props.loginCredential.CryptoToWatch}
          />
          <MinerStatusComponent 
            miningPools={this.props.loginCredential.MiningPools}
          />
          <CryptoCoinStatusComponent 
            cryptoToWatch={this.props.loginCredential.CryptoToWatch}
          />
        </div>
      );
    }
    return (<div>Loading...</div>)
  }
}

const mapStateToProps = (state) => {
  return {
    loginCredential: state.loginReducer.loginCredential
  }
}

export default connect(mapStateToProps, actions)(Home);
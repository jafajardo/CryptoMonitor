import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as converter from '../helper/converter';

class EthBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  componentDidUpdate = () => {
    const { walletAddress } = this.props;
    this.props.getBalance(walletAddress);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.getBalance(this.state.search);
  }

  onSearchBarChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  renderSearchBar = () => {
    return (
      <section id="eth-search">
        <form className="input-group ethSearchBar" onSubmit={ this.onSubmit }>
          <input className="form-control text-center" placeholder="Search ETH Address" onChange={ this.onSearchBarChange }/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary" >Get Balance</button>
          </span>
        </form>
      </section>
    );
  }

  renderBalance = () => {
    let hexValue = '';
    if (this.props.ethBalance) {
      hexValue = this.props.ethBalance.split("x")[1];
    }
    
    return (
      <section id="eth-balance">
        <h2 className="text-center">
          { `${converter.ConvertWeiToEther(converter.ConvertHexToWei(hexValue))} Ether` }
        </h2>
      </section>
    );
  }

  render = () => {
    return (
      <div>
        { this.renderBalance() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ethBalance: state.ethBalanceReducer.ethBalance
  }
}

export default connect(mapStateToProps, actions)(EthBalance);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MinerStatus from './minerStatus';

class MinerStatusComponent extends Component {
  componentDidMount = () => {
  }

  renderMinerStatus = (miningPools) => {
    return (
      miningPools.map((mp, index) => {
        return (
          <MinerStatus 
            key={index}
            name={mp.Name}
            coin={mp.Coin}
            baseEndpoint={mp.BaseEndpoint}
            wallet={mp.Wallet}
          />
        )
      })
    );
  }

  render () {
    const { miningPools } = this.props;
    if (miningPools) {
      return (
        <div className="row">
          <div className="card-group">
            {this.renderMinerStatus(miningPools)}
          </div>
        </div>
      );
    }
    return (
      <dir className="text-center">Loading...</dir>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, actions)(MinerStatusComponent);
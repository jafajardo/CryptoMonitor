import React, { Component } from 'react';
import { connect } from 'react-redux';

class CryptoCoinStatus extends Component {
  render () {
    const { cryptocurrency, tag, algorithm, blockTime, blockReward, difficulty, marketCap } = this.props;
    return (
      <div className="col-sm removePadding"> 
        <div className="card card-inverse cardInverse">
          <div className="card-block cardBlock">
            <h4 className="card-title">{cryptocurrency}</h4>
            <div className="card-text">Difficulty: {difficulty}</div>
            <div className="card-text">Block Time: {blockTime}</div>
            <div className="card-text">Block Reward: {blockReward}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoCoinStatus;
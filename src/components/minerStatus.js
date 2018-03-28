import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import * as actions from '../actions';

class MinerStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      coin: this.props.coin,
      baseEndpoint: this.props.baseEndpoint,
      wallet: this.props.wallet,
      backgroundColors: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)',
        'rgba(204, 51, 255, 0.4)',
        'rgba(102, 102, 51, 0.4)',
        'rgba(255, 153, 255, 0.4)',
        'rgba(191, 128, 255, 0.4)',
        'rgba(113, 113, 218, 0.4)',
        'rgba(128, 255, 229, 0.4)',
        'rgba(77, 255, 77, 0.4)',
        'rgba(255, 153, 102, 0.4)',
        'rgba(77, 255, 136, 0.4)',
        'rgba(210, 166, 121, 0.4)',
        'rgba(255, 71, 26, 0.4)',
        'rgba(128, 255, 128, 0.4)',
        'rgba(51, 153, 255, 0.4)'
      ]
    }
  }

  componentDidMount = () => {
    this.props.getMinerStatus(this.state.baseEndpoint, this.state.wallet, this.state.name, this.state.coin);
  }

  render () {
    const status = this.props.minerStatus.find(ms => ms.pool === this.state.name && ms.coin === this.state.coin);
    
    if (status) {
      const { coin, pool, workers } = status;

      if (workers && workers.length > 0) {
        let data = new Array();
        let labels = new Array();
        let backgroundColor = new Array();

        workers.forEach((worker, index) => {
          labels.push(worker.Name);
          backgroundColor.push(this.state.backgroundColors[index]);
          data.push(worker.Hashrate);
        })

        let chartData = {
          datasets: [{
            data,
            backgroundColor,
            borderWidth: 0.5
          }],
          labels
        }

        return (
          <div className="card card-inverse h-50">
            <Doughnut 
              data={chartData}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        );
      }
    }

    return (<div></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    minerStatus: state.minerStatusReducer.minerStatus
  }
}
export default connect(mapStateToProps, actions)(MinerStatus);
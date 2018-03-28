import React, { Component } from 'react';
import { connect } from 'react-redux';

class Chart extends Component {
    renderChart = () => {
        return (
            <div>
                Chart!
            </div>
        );
    }
    
    render = () => {
        return (
            <div>
                { this.renderChart() }
            </div>
        );
    }
}

export default Chart;
import React, { Component } from 'react';
import Order from '../../../components/Order/Order';
import './Sell.css';

class Sell extends Component {
    render() {
        return (
            <div className="Sell">
                <Order type="sell" />
            </div>
        );
    }
}

export default Sell;
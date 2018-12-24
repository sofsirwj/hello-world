import React, { Component } from 'react';
import Order from '../../../components/Order/Order';
import './Buy.css';

class Buy extends Component {
    render() {
        return (
            <div className="Buy">
                <Order type="buy" />
            </div>
        );
    }
}

export default Buy;
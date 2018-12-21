import React, { Component } from 'react';
import Order from '../../../components/Order/Order';
import './Buy.css';

class Buy extends Component {
    componentDidMount() {
        this.props.getStocks();
        this.props.getAccount(this.props.accountId);
    }
    
    render() {
        return (
            <div className="Buy">
                <Order type="buy" />
            </div>
        );
    }
}

export default Buy;
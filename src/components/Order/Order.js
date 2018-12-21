import React, { Component } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import OrderTable from '../OrderTable/OrderTable';
import './Order.css';

class Order extends Component {
    render() {
        return (
            <div className="Order">
                <OrderForm type={this.props.type} />
                <OrderTable type={this.props.type} />
            </div>
        );
    }
}

export default Order;
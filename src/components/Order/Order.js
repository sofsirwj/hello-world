import React, { Component } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import OrderTable from '../OrderTable/OrderTable';
import './Order.css';

class Order extends Component {
    render() {
        return (
            <div className="Order">
                <OrderForm
                    type={this.props.type}
                    submitHandler={this.props.submitHandler}
                    stockChangeHandler={this.props.stockChangeHandler} />
                <OrderTable
                    type={this.props.type}
                    orders={this.props.orders} />
            </div>
        );
    }
}

export default Order;
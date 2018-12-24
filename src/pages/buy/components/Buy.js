import React, { Component } from 'react';
import Order from '../../../components/Order/Order';
import './Buy.css';

class Buy extends Component {
    componentWillUnmount(){
        this.props.clear();
    }

    submitHandler = queryData => {
        this.props.createBuyOrder(queryData)
        .then(() => {
            this.props.getBuyOrders(null, queryData.stock_id);
        });;
    }

    stockChangeHandler = stockId => {
        this.props.getStock(stockId);
        this.props.getBuyOrders(null, stockId);
    }

    render() {
        return (
            <div className="Buy">
                <Order
                    type="buy"
                    orders={this.props.orders}
                    submitHandler={this.submitHandler}
                    stockChangeHandler={this.stockChangeHandler} />
            </div>
        );
    }
}

export default Buy;
import React, { Component } from 'react';
import Order from '../../../components/Order/Order';
import './Sell.css';

class Sell extends Component {
    componentWillUnmount(){
        this.props.clear();
    }
    submitHandler = queryData => {
        this.props.createSellOrder(queryData)
        .then(() => {
            this.props.getSellOrders(null, queryData.stock_id);
        });
    }

    stockChangeHandler = stockId => {
        this.props.getStock(stockId);
        this.props.getSellOrders(null, stockId);
    }

    render() {
        return (
            <div className="Sell">
                <Order
                    type="sell"
                    orders={this.props.orders}
                    submitHandler={this.submitHandler}
                    stockChangeHandler={this.stockChangeHandler} />
            </div>
        );
    }
}

export default Sell;
import React, { Component } from 'react';
import ChiCangTable from '../../../components/ChiCangTable/ChiCangTable';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getAccount();
        this.props.getAllOrders();
    }

    componentWillUnmount(){
        this.props.clear();
    }

    getChiCangStockDatas = () => {
        let stockIds = [];
        let chiCangStockDatas = []
        this.props.orders.forEach(order => {
            if(stockIds.indexOf(order.stock_id) === -1){
                stockIds.push(order.stock_id);
            }
        });
        for(let i = 0; i < stockIds.length; i++){
            let stockId = stockIds[i];
            let stockOrders = this.props.orders.filter(order => order.stock_id === stockId);
            if(stockOrders.length === 0){
                continue;
            }

            let stockDoneOrders = stockOrders.filter(order => order.status === 'done');

            let stockBuyDoneOrders = stockDoneOrders.filter(order => order.order_type === 'buy');
            let stockBuyDonePrices = stockBuyDoneOrders.map((order) => order.entrust_amount * order.deal_price);
            let stockBuyDoneTotalPrice = stockBuyDonePrices.length && stockBuyDonePrices.reduce((accumulator, currentValue) => accumulator + currentValue);
            let stockBuyDoneAmounts = stockBuyDoneOrders.map((order) => order.entrust_amount);
            // total buy amount
            let stockBuyDoneTotalAmount = stockBuyDoneAmounts.length && stockBuyDoneAmounts.reduce((accumulator, currentValue) => accumulator + currentValue);
            // TODO: total buy amount in today
            // let stockTodayBuyDoneOrders = stockBuyDoneOrders.filter(order => 'is order done in today');
            // let stockTodayBuyDoneAmounts = stockTodayBuyDoneOrders.map((order) => order.entrust_amount);
            // let stockTodayBuyDoneTotalAmount = stockTodayBuyDoneAmounts.reduce((accumulator, currentValue) => accumulator + currentValue);


            let stockSellDoneOrders = stockDoneOrders.filter(order => order.order_type === 'sell');
            let stockSellDoneAmounts = stockSellDoneOrders.map((order) => order.entrust_amount);
            // total sell amount
            let stockSellDoneTotalAmount = stockSellDoneAmounts.length && stockSellDoneAmounts.reduce((accumulator, currentValue) => accumulator + currentValue);


            if(stockDoneOrders.length){
                chiCangStockDatas.push({
                    stock_id: stockId,
                    stock_name: stockOrders[0].stock_name,
                    amount: stockBuyDoneTotalAmount - stockSellDoneTotalAmount,
                    price: stockBuyDoneTotalPrice/stockBuyDoneTotalAmount
                    // today_buy_amount: stockTodayBuyDoneTotalAmount (limited by T+1 rule)
                });
            }
        }
        return chiCangStockDatas;
    }

    render() {
        return (
            <div className="Home">
                <div className="summary">
                    <div className="hd">
                        <p>虚拟总资产: <span>100000</span></p>
                        <p>收益率: 0.00%</p>
                    </div>
                    <div className="bd">
                        <p>今日盈利/亏损: <span>0.00</span></p>
                        <p>持仓盈亏: <span>0.00</span></p>
                        <p>当前仓位: <span>0.00</span></p>
                        <p>持仓市值: 0.00</p>
                        <p>可用资金: {this.props.account.balance}</p>
                        <p>冻结资金: 0.00</p>
                    </div>
                </div>
                <ChiCangTable chiCangStockDatas={this.getChiCangStockDatas()} />
            </div>
        );
    }
}

export default Home;
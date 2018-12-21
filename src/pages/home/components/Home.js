import React, { Component } from 'react';
import ChiCangTable from '../../../components/ChiCangTable/ChiCangTable';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getAccount();
        this.props.getAllOrders();
    }

    render() {
        return (
            <div className="Home">
                <div className="summary">
                    <div className="hd">
                        <p>虚拟总资产: <span>1000000</span></p>
                        <p>收益率: 0.00%</p>
                    </div>
                    <div className="bd">
                        <p>今日盈利: <span>0.00</span></p>
                        <p>持仓盈亏: <span>0.00</span></p>
                        <p>当前仓位: <span>0.00</span></p>
                        <p>持仓市值: 0.00</p>
                        <p>可用资金: 1000000</p>
                        <p>冻结资金: 0.00</p>
                    </div>
                </div>
                <ChiCangTable />
            </div>
        );
    }
}

export default Home;
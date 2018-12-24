import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as globalActions from '../../modules/global/actions';
import AmountInput from '../AmountInput/AmountInput';
import './OrderForm.css';

class OrderForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            entrustType: 'limit',
            price: 5.56,
            amount: '' // for showing placeholder when it's zero
        };
    }

    componentDidMount(){
        this.props.getStocks();
        this.props.getAccount(this.props.accountId);
    }

    changeEntrustType(type){
        if(type !== this.state.type){
            this.setState({
                entrustType: type
            });
        }
    }

    limitClickHandler = () => {
        this.changeEntrustType('limit');
    }

    marketClickHandler = () => {
        this.changeEntrustType('market');
    }

    chnageHandler = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    render() {
        return (
            <form className={'OrderForm' + (this.props.type === 'sell' ? ' OrderForm-fall' : '')}>
                <select>
                    <option>请选择股票</option>
                    <option vlaue="600028">中国石化 600028</option>
                </select>
                <ul className="entrust-type">
                    <li className={this.state.entrustType === 'limit' ? 'selected' : ''} onClick={this.limitClickHandler}>限价委托</li>
                    <li className={this.state.entrustType === 'market' ? 'selected' : ''} onClick={this.marketClickHandler}>市价委托</li>
                </ul>
                <AmountInput name="price" value={this.state.price} step={0.01} fixed={2} onChange={this.chnageHandler} />
                <div>
                    <p>跌停 <span className="fall">{5.05}</span></p>
                    <p>涨停 <span className="rise">{6.17}</span></p>
                </div>
                <AmountInput name="amount" value={this.state.amount} step={100} onChange={this.chnageHandler} />
                <div>
                    <p>可买 {900} 股</p>
                    <ul>
                        <li>全部</li>
                        <li>1/2仓</li>
                        <li>1/3仓</li>
                        <li>1/4仓</li>
                    </ul>
                </div>
                <input type="submit" vlaue="买入" />
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        accountId: state.login.accountId,
        stocks: state.global.stocks,
        account: state.global.account
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, globalActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
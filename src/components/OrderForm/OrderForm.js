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
            entrust_type: 'limit',
            entrust_limit: '', // for showing placeholder when it's zero
            entrust_amount: ''
        };
    }

    componentDidMount(){
        this.props.getStocks();
        this.props.getAccount(this.props.accountId);
    }

    componentWillReceiveProps(nextPros){
        if(nextPros.stock && nextPros.stock.id !== this.props.stock.id){
            this.setState({
                entrust_limit: nextPros.stock.settlement
            });
        }
    }

    changeEntrustType(type){
        if(type !== this.state.type){
            this.setState({
                entrust_type: type
            });
        }
    }

    limitClickHandler = () => {
        this.changeEntrustType('limit');
    }

    marketClickHandler = () => {
        this.changeEntrustType('market');
    }

    changeHandler = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    onChangeHandler = e => {
        this.changeHandler(e.target.name, e.target.value);
        if(e.target.name === 'stock_id'){
            this.props.stockChangeHandler(e.target.value);
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();

        // basic validate
        if(!this.state.stock_id || !this.state.entrust_amount){
            return;
        }

        let queryData = {
            account_id: this.props.accountId,
            stock_id: this.state.stock_id,
            entrust_type: this.state.entrust_type,
            entrust_amount: this.state.entrust_amount,
            deal_price: this.props.stock.settlement
        };
        if(this.state.entrust_type === 'limit'){
            queryData.entrust_limit = this.state.entrust_limit;
        }
        this.props.submitHandler(queryData);
    }

    render() {
        return (
            <form className={'OrderForm' + (this.props.type === 'sell' ? ' OrderForm-fall' : '')} onSubmit={this.onSubmitHandler}>
                <select name="stock_id" onChange={this.onChangeHandler}>
                    <option>请选择股票</option>
                    {this.props.stocks.map(stock => {
                        return (
                            <option key={stock.id} value={stock.id}>{`${stock.name} ${stock.id}`}</option>
                        );
                    })}
                </select>
                <ul className="entrust-type">
                    <li className={this.state.entrust_type === 'limit' ? 'selected' : ''} onClick={this.limitClickHandler}>限价委托</li>
                    <li className={this.state.entrust_type === 'market' ? 'selected' : ''} onClick={this.marketClickHandler}>市价委托</li>
                </ul>
                {this.state.entrust_type === 'limit'
                    ? <AmountInput name="entrust_limit" value={this.state.entrust_limit} step={0.01} fixed={2} onChange={this.changeHandler} />
                    : <div className="market">市价</div>
                }
                {
                // <div>
                //     <p>跌停 <span className="fall">{5.05}</span></p>
                //     <p>涨停 <span className="rise">{6.17}</span></p>
                // </div>
                }
                <AmountInput name="entrust_amount" value={this.state.entrust_amount} step={100} onChange={this.changeHandler} />
                {
                // <div>
                //     <p>可买 {900} 股</p>
                //     <ul>
                //         <li>全部</li>
                //         <li>1/2仓</li>
                //         <li>1/3仓</li>
                //         <li>1/4仓</li>
                //     </ul>
                // </div>
                }
                <input type="submit" vlaue="买入" />
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        accountId: state.login.accountId,
        stocks: state.global.stocks,
        account: state.global.account,
        stock: state.global.stock
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, globalActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
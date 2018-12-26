import React, { Component } from 'react';
import './OrderTable.css';

class OrderTable extends Component {
    render() {
        return (
            <table className="OrderTable">
                <thead>
                    <tr>
                        <th>委托时间</th>
                        <th>委托/成交均价</th>
                        <th>委托/成交</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.orders.map(order => {
                        return (
                            <tr key={order.order_id}>
                                <td>
                                    <span className="type">{this.props.type === 'sell' ? '卖' : '买'}</span>
                                    <p>
                                        {order.stock_name}
                                        <br />
                                        {order.ctime}
                                    </p>
                                </td>
                                <td>
                                    {order.entrust_limit}
                                    <br />
                                    --
                                </td>
                                <td>
                                    {order.entrust_amount}
                                    <br />
                                    {order.status === 'done' ? order.entrust_amount : '--'}
                                </td>
                                <td>
                                    已报/已成交
                                    <br />
                                    {order.utime}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default OrderTable;
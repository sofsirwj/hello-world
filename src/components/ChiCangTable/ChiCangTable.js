import React, { Component } from 'react';
import './ChiCangTable.css';

class ChiCangTable extends Component {
    render() {
        return (
            <table className="ChiCangTable">
                <thead>
                    <tr>
                        <th>名称/市值</th>
                        <th>现价/成本</th>
                        <th>持仓/可用</th>
                        <th>盈亏/盈亏率</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.chiCangStockDatas.map(chiCangStockData => {
                        return (
                            <tr key={chiCangStockData.stock_id}>
                                <td>
                                    {chiCangStockData.stock_name}
                                    <br />
                                    --
                                </td>
                                <td>
                                    --
                                    <br />
                                    <span className="chengben">{chiCangStockData.price}</span>
                                </td>
                                <td>
                                    {chiCangStockData.amount}
                                    <br />
                                    --
                                </td>
                                <td>
                                    --
                                    <br />
                                    --
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default ChiCangTable;
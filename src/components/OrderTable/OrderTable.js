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
                    <tr>
                        <td>
                            <span className="type">买</span>
                            <p>
                                中国石油
                                <br />
                                2018-12-20
                            </p>
                        </td>
                        <td>
                            5.59
                            <br />
                            --
                        </td>
                        <td>
                            200
                            <br />
                            200
                        </td>
                        <td>
                            已报/已成交
                            <br />
                            13:00:04
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default OrderTable;
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
                    <tr>
                        <td>
                            中国石油
                            <br />
                            1476.0
                        </td>
                        <td>
                            7.37
                            <br />
                            <span className="chengben">7.41</span>
                        </td>
                        <td>
                            200
                            <br />
                            0
                        </td>
                        <td>
                            -9.0
                            <br />
                            -0.61%
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default ChiCangTable;
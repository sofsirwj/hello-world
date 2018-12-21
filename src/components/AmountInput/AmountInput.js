import React, { Component } from 'react';
import * as math from 'mathjs';
import './AmountInput.css';

class AmountInput extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.minusHandler}>-</button>
                <input name={this.props.name} type="text" placeholder="数量" value={this.props.value} onChange={this.onChangeHandler} />
                <button type="button" onClick={this.plusHandler}>+</button>
            </div>
        );
    }

    onChangeHandler = (e) => {
        this.props.onChange(e.target.name, e.target.value);
    }

    minusHandler = () => {
        this.change('minus');
    }

    plusHandler = () => {
        this.change('plus');
    }

    change = type => {
        let currentValue = this.props.value || 0;
        if(type === 'minus' && currentValue <= 0){
            return;
        }
        let nextValue = math.number(math[type === 'minus' ? 'subtract' : 'add'](math.fraction(currentValue), math.fraction(this.props.step)));
        if(this.props.fixed){
            nextValue = nextValue.toFixed(this.props.fixed);
        }
        this.props.onChange(this.props.name, nextValue);
    }
}

export default AmountInput;
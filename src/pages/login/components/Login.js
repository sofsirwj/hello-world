import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            accountId: ''
        };
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor="accountId">账号：</label>
                <input name="accountId" value={this.state.accountId} onChange={this.changeHandler} type="text" placeholder="123456" />
                <input type="submit" value="登录" />
            </form>
        );
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.login(this.state.accountId)
        .then(() => {
            this.props.replace('/');
        });
    }
}

export default Login;
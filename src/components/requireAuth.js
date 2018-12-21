import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';

export default function requireAuth(Comp){
    class Auth extends Component {
        render() {
            if(this.props.accountId){
                return <Comp {...this.props} />;
            }else{
                return <Redirect to="/login" />;
            }
        }
    }
    
    return connect(mapStateToProps, null)(Auth);
};

function mapStateToProps(state){
    return {
        accountId: state.login.accountId
    };
}
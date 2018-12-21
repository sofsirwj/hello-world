import {getStocks as _getStocks} from '../../services/stock';
import {getAccount as _getAccount} from '../../services/account';
import {getOrders as _getOrders} from '../../services/order';
import {GET_STOCKS_SUCCESS, GET_ACCOUNT_SUCCESS, GET_ORDERS_SUCCESS} from '../constants';

export const getStocks = () => {
    return dispatch => {
        _getStocks()
        .then(data => {
            dispatch({
                type: GET_STOCKS_SUCCESS,
                stocks: data
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
};

export const getBuyOrders = (accountId, status) => {
    return getOrders(accountId, 'buy');
};

export const getSellOrders = (accountId, status) => {
    return getOrders(accountId, 'sell');
};

export const getAllOrders = (accountId) => {
    return getOrders(accountId);
};

export const getAccount = (accountId) => {
    return (dispatch, getState) => {
        accountId = accountId || getState().login.accountId;
        _getAccount(accountId)
        .then(data => {
            dispatch({
                type: GET_ACCOUNT_SUCCESS,
                accountId: accountId
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
};

function getOrders(accountId, status){
    return (dispatch, getState) => {
        accountId = accountId || getState().login.accountId;
        _getOrders(accountId, status)
        .then(data => {
            dispatch({
                type: GET_ORDERS_SUCCESS,
                orders: data
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
}
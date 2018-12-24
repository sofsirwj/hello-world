import {getStocks as _getStocks, getStock as _getStock} from '../../services/stock';
import {getAccount as _getAccount} from '../../services/account';
import {getOrders as _getOrders} from '../../services/order';
import {
    GET_STOCKS_SUCCESS,
    GET_ACCOUNT_SUCCESS,
    GET_STOCK_SUCCESS,
    GET_ORDERS_SUCCESS,
    CLEAR
} from '../constants';

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

export const getStock = (stockId) => {
    return dispatch => {
        _getStock(stockId)
        .then(data => {
            dispatch({
                type: GET_STOCK_SUCCESS,
                stock: data
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
};

export const getBuyOrders = (accountId, stockId, status) => {
    return getOrders(accountId, stockId, 'buy', status);
};

export const getSellOrders = (accountId, stockId, status) => {
    return getOrders(accountId, stockId, 'sell', status);
};

export const getAllOrders = (accountId, stockId, status) => {
    return getOrders(accountId, stockId, null, status);
};

export const getAccount = (accountId) => {
    return (dispatch, getState) => {
        accountId = accountId || getState().login.accountId;
        _getAccount(accountId)
        .then(data => {
            dispatch({
                type: GET_ACCOUNT_SUCCESS,
                account: data
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
};

export const clear = () => {
    return {
        type: CLEAR
    };
};


function getOrders(accountId, stockId, orderType, status){
    return (dispatch, getState) => {
        accountId = accountId || getState().login.accountId;
        _getOrders(accountId, stockId, orderType, status)
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
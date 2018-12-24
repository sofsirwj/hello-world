import {
    GET_STOCKS_SUCCESS,
    GET_ACCOUNT_SUCCESS,
    GET_STOCK_SUCCESS,
    GET_ORDERS_SUCCESS,
    CLEAR
} from '../constants';

const initialState = {
    stocks: [],
    account: {},
    stock: {},
    orders: []
};

export default function homeReducer(state = initialState, action){
    switch(action.type){
        case GET_STOCKS_SUCCESS:
            return Object.assign({}, state, {
                stocks: action.stocks
            });
        case GET_ACCOUNT_SUCCESS:
            return Object.assign({}, state, {
                account: action.account
            });
        case GET_ORDERS_SUCCESS:
            return Object.assign({}, state, {
                orders: action.orders
            });
        case GET_STOCK_SUCCESS:
            return Object.assign({}, state, {
                stock: action.stock
            });
        case CLEAR:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
};
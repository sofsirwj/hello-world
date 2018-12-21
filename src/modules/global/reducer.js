import {GET_STOCKS_SUCCESS} from '../constants';

const initialState = {
    stocks: [],
    account: {}
};

export default function homeReducer(state = initialState, action){
    switch(action.type){
        case GET_STOCKS_SUCCESS:
            return Object.assign({}, state, {
                stocks: action.stocks
            });
        // break;
        default:
            return state;
    }
};
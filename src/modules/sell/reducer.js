import {ORDER_SELL_SUCCESS} from '../constants';

const initialState = {
    order: null
};

export default function homeReducer(state = initialState, action){
    switch(action.type){
        case ORDER_SELL_SUCCESS:
            return Object.assign({}, state, {
                order: action.order
            });
        default:
            return state;
    }
};
import {LOGIN_SUCCESS} from '../constants';

const initialState = {
    accountId: sessionStorage.getItem('accountId')
};

export default function loginReducer(state = initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                accountId: action.accountId
            });
        default:
            return state;
    }
};
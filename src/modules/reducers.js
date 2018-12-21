import {combineReducers} from 'redux';
import loginReducer from './login/reducer';
import globalReducer from './global/reducer';

export default combineReducers({
    global: globalReducer,
    login: loginReducer,
    // buy: buyReducer,
    // sell: sellReducer
});
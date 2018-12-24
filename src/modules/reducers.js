import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import loginReducer from './login/reducer';
import globalReducer from './global/reducer';

export default history => combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    login: loginReducer,
    // buy: buyReducer,
    // sell: sellReducer
});
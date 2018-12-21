import {login as _login} from '../../services/account';
import {LOGIN_SUCCESS} from '../constants';

export const login = (accountId) => {
    return dispatch => {
        return _login(accountId)
        .then(data => {
            sessionStorage.setItem('accountId', accountId);
            dispatch({
                type: LOGIN_SUCCESS,
                accountId
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
};
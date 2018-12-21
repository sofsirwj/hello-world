import api from '../utils/api';

export const login = (accountId) => {
    return api.post('/login', {
        accountId
    });
};

export const getAccount = (accountId) => {
    if(!accountId){
        return Promise.reject('accountId is required');
    }
    return api.get(`/accounts/${accountId}`);
};
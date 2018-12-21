import api from '../utils/api';

export const getOrders = (accountId, status) => {
    if(!accountId){
        return Promise.reject('accountId is required');
    }
    return api.get('/orders', {
        accountId,
        status
    });
};
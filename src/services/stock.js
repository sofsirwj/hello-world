import api from '../utils/api';

export const getStocks = () => {
    return api.get('/stocks');
};

export const getStock = (stockId) => {
    if(!stockId){
        return Promise.reject('stockId is required');
    }
    return api.get(`/stocks/${stockId}`);
};
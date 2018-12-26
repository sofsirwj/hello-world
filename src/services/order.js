import api from '../utils/api';

export const getOrders = (accountId, stockId, orderType, status) => {
    if(!accountId){
        return Promise.reject('accountId is required');
    }
    let queryData = {
        account_id: accountId,
        stock_id: stockId,
        order_type: orderType,
        status
    };
    return api.get('/orders', queryData);
};

export const createBuyOrder = (queryData) => {
    queryData.order_type = 'buy';
    return createOrder(queryData);
};

export const createSellOrder = (queryData) => {
    queryData.order_type = 'sell';
    return createOrder(queryData);
};

function createOrder(queryData){
    // fake done
    if(queryData.entrust_limit){
        queryData.deal_price = queryData.entrust_limit + Math.floor(Math.random()*10)/100 * queryData.entrust_limit * (queryData.order_type === 'buy' ? -1 : 1);
    }else{
        queryData.deal_price = queryData.entrust_limit + Math.floor(Math.random()*10)/100 * queryData.entrust_limit * (Math.random() > 0.5 ? -1 : 1);
    }
    queryData.status = 'done';
    return api.post('/orders', queryData);
}
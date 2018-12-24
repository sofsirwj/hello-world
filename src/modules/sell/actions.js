import {createSellOrder as _createSellOrder} from '../../services/order';
import {ORDER_SELL_SUCCESS} from '../constants';

export const createSellOrder = (queryData) => {
    return dispatch => {
        _createSellOrder(queryData)
        .then(data => {
            dispatch({
                type: ORDER_SELL_SUCCESS,
                order: data
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
};
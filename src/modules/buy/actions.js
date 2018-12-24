import {createBuyOrder as _createBuyOrder} from '../../services/order';
import {ORDER_BUY_SUCCESS} from '../constants';

export const createBuyOrder = (queryData) => {
    return dispatch => {
        return _createBuyOrder(queryData)
        .then(data => {
            dispatch({
                type: ORDER_BUY_SUCCESS,
                order: data
            });
        })
        .catch(error => {
            console.error(error);
        });
    };
};
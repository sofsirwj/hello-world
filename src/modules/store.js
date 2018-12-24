import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createRootReducer from './reducers';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
    trace: true,
    traceLimit: 25
});

export default (preloadedState, history) => createStore(
    createRootReducer(history),
    preloadedState || {},
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // other store enhancers if any
    )
);
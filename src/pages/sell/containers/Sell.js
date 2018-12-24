import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as globalActions from '../../../modules/global/actions';
import * as sellActions from '../../../modules/sell/actions';
import Sell from '../components/Sell';

function mapStateToProps(state){
    return {
        orders: state.global.orders
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, globalActions, sellActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
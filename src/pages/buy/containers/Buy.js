import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as globalActions from '../../../modules/global/actions';
import * as buyActions from '../../../modules/buy/actions';
import Buy from '../components/Buy';

function mapStateToProps(state){
    return {
        orders: state.global.orders
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, globalActions, buyActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
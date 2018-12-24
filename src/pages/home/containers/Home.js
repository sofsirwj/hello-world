import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as globalActions from '../../../modules/global/actions';
import Home from '../components/Home';

function mapStateToProps(state){
    return {
        account: state.global.account,
        orders: state.global.orders
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, globalActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
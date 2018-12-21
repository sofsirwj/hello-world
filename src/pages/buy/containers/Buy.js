import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as globalActions from '../../../modules/global/actions';
import Buy from '../components/Buy';

function mapStateToProps(state){
    return {
        stocks: state.global.stocks,
        account: state.global.account
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, globalActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
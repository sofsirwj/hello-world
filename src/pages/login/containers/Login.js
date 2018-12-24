import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { replace, push } from 'connected-react-router';
import * as loginActions from '../../../modules/login/actions';
import Login from '../components/Login';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, loginActions, {replace, push}), dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
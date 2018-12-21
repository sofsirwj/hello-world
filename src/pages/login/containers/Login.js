import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../../../modules/login/actions';
import Login from '../components/Login';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, loginActions), dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout, login, receiveErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout:() => dispatch(logout()),
    login:(user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
});






export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

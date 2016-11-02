import SessionForm from './session_form';
import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: (state.session.currentUser !== null),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: location.hash === '#/login' ? 'login' : 'signup',
  processForm: (user, type) => (type === 'login' ? dispatch(login(user)) : dispatch(signup(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

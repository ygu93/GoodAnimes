import React from 'react';
import {Link, hashHistory} from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import {authModalStyle} from '../session_form/auth_modal_style';

document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document);
});

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      auth: false,
      formType: ''
    };
    this.loginClick = this.loginClick.bind(this);
    this.signupClick = this.signupClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  modalClose(){
    this.setState({auth: false});
  }

  loginClick(){
    this.setState({auth: true, formType:'login'});
  }

  signupClick(){
    this.setState({auth: true, formType:'signup'});
  }

  guestLogin(e){
    e.preventDefault();
    const guest = {username:"Guest", password:"password"};
    this.props.login(guest);
  }

  clearForm(){
    this.props.receiveErrors([]);
  }
  render(){
    let currentUser = this.props.currentUser;
    if(currentUser){
      return(
          <nav>
            <li className='logo'><Link to='/home' onClick={this.props.requestAllAnimeLibraries}><span className='logo1'>good</span><span className='logo2'>animes</span></Link></li>
            <li className='browse'><Link to='/home'>Home</Link></li>
            <li className='browse'><Link to='/animes'>Browse</Link></li>
            <button onClick={this.props.logout} className = 'logout auth-link'>Logout</button>
          </nav>
      );
    }else{
      return(
        <div>
        <nav>
          <li className='logo'><Link to='/'><span className='logo1'>good</span><span className='logo2'>animes</span></Link></li>
          <button className='guest-login auth-link' onClick={this.guestLogin}>Guest Login</button>
          <button className='signup auth-link' onClick={this.signupClick}>Sign Up</button>
          <button className='login auth-link' onClick={this.loginClick}>Log In</button>

        </nav>
        <Modal
          isOpen={this.state.auth}
          onAfterOpen={this.clearForm}
          onRequestClose={this.modalClose}
          style={authModalStyle}>
          <SessionFormContainer formType={this.state.formType} modalClose = {this.modalClose.bind(this)}/>
        </Modal>
        </div>
      );
    }
  }
}


export default Navbar;

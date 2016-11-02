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
  render(){
    let currentUser = this.props.currentUser;
    if(currentUser){
      return(
          <nav>
            <li className='logo'><Link to='/'>goodanimes</Link></li>
            <li className = 'saber'><img src = "http://images2.fanpop.com/images/photos/6700000/Chibi-Saber-fate-stay-night-6717291-455-500.jpg"/></li>
            <li className='browse'><Link to='/animes'>Browse</Link></li>
            <li> Hi! {currentUser.username}</li>
            <button onClick={this.props.logout} className = 'logout'>Logout</button>
          </nav>
      );
    }else{
      return(
        <div>
        <nav>
          <li className='logo'><Link to='/'>goodanimes</Link></li>
          <li className = 'saber'><img src = "http://images2.fanpop.com/images/photos/6700000/Chibi-Saber-fate-stay-night-6717291-455-500.jpg"/></li>
          <button className='signup auth-link' onClick={this.signupClick}>Sign Up</button>
          <button className='login auth-link' onClick={this.loginClick}>Log In</button>

        </nav>
        <Modal
          isOpen={this.state.auth}
          onRequestClose={this.modalClose}
          style={authModalStyle}>
          <SessionFormContainer formType={this.state.formType}/>
        </Modal>
        </div>
      );
    }
  }
}


export default Navbar;

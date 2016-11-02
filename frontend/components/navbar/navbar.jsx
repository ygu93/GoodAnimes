import React from 'react';
import {Link, hashHistory} from 'react-router';

class Navbar extends React.Component{
  constructor(props){
    super(props);
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
        <nav>
          <li className='logo'><Link to='/'>goodanimes</Link></li>
          <li className = 'saber'><img src = "http://images2.fanpop.com/images/photos/6700000/Chibi-Saber-fate-stay-night-6717291-455-500.jpg"/></li>
          <li className='signup auth-link'><Link to='/signup'>Sign Up</Link></li>
          <li className='login auth-link'><Link to='/login'>Log In</Link></li>
        </nav>
      );
    }
  }
}


export default Navbar;

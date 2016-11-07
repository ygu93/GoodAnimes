import React from 'react';
import {Link, hashHistory} from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user, this.props.formType);
  }


  updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }

  componentDidUpdate(){
		this.redirectIfLoggedIn();
	}


  redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/home");
		}
	}



  render(){
    return(
      <div className = 'authform'>
        <h2>{this.props.formType === 'login' ? 'Login': 'Sign up'}</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username" className = 'auth-input'>Username
          </label>
          <input type='text' name='user[username]' onChange={this.updateForm('username')} id="username"></input>
          <br/>
          <br/>
          <label className = 'auth-input' htmlFor="password" id="pass-input">Password
          </label>
          <input type='password' name='user[password]' onChange={this.updateForm('password')} id="password"></input>
          <br/>
          <br/>
          <button>Submit</button>
          <ul className='errors'>
            {this.props.errors.map((error,idx) => <li key={idx}>{error}</li>)}
          </ul>
        </form>
      </div>
    );
  }
}

export default SessionForm;

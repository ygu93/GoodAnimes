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
			hashHistory.push("/");
		}
	}



  render(){
    return(
      <div className = 'authform'>
        <h2>{this.props.formType === 'login' ? 'Login': 'Sign up'}</h2>

        <form onSubmit={this.handleSubmit}>
          <label className = 'auth-input'>Username
          <input type='text' name='user[username]' onChange={this.updateForm('username')}></input>
          </label>
          <br/>
          <br/>
          <label className = 'auth-input'>Password
          <input type='password' name='user[password]' onChange={this.updateForm('password')}></input>
          </label>
          <br/>
          <br/>
          <button>Submit</button>
          <ul className='errors'>
            {this.props.errors.map(error => <li>{error}</li>)}
          </ul>
        </form>
      </div>
    );
  }
}

export default SessionForm;

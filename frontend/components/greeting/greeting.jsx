import React from 'react';
import {Link, hashHistory} from 'react-router';
import Scroll from 'react-scroll';
const Element = Scroll.Element;
const scroller = Scroll.scroller;
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import {authModalStyle} from '../session_form/auth_modal_style';

document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document);
});

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      auth: false,
    };
    this.signupClick = this.signupClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  signupClick(){
    this.setState({auth: true});
  }

  modalClose(){
    this.setState({auth: false});
  }

  scrollToDesc(){
    return scroller.scrollTo('scroll-target', {smooth:true});
  }

  redirectIfLoggedIn(){
		hashHistory.push("/home");
	}

  guestLogin(e){
    e.preventDefault();
    const guest = {username:"Guest", password:"password"};
    this.props.login(guest);
  }


  render(){
    let currentUser = this.props.currentUser;
      return(
      <div className = 'splash'>
        <div className='hero-section'>
          <video id="background-video" loop autoPlay preload>
            <source src="https://s3.amazonaws.com/goodanimesvideos/splash.mp4" />
            Your browser does not support this video.
          </video>
          <div className="hero-overlay"></div>
          <div className='intro'>
            <p className='watermark'><span className='logo1'>good</span><span className='logo2'>animes</span></p>
            <p className='intro-message'>Share your anime experiences with others, find new animes, and track your favorite animes</p>
            <p className='learn-more' onClick={this.scrollToDesc}>Learn More</p>
          </div>
        </div>
      <Element name='scroll-target'></Element>
      <div className='about'>
        <h2 className ='welcome'>Meeting your next favorite Anime</h2>
        <section className = 'descr'>
          <p className='blurb1'>
            When watching anime, finding the right anime to watch is half the battle. With goodanimes, you can always find the right
            anime for you.
            <br/>
            <img src="https://s3.amazonaws.com/goodanimesvideos/rsz_anime-index.jpg"/>
          </p>

          <p className='blurb2'>
            Browse an anime's detail page to read a detailed synopsis, and read what others think about the show.
            <br/>
            <img src="https://s3.amazonaws.com/goodanimesvideos/anime-details.png"/>
          </p>
          <p className='blurb3'>
            Build your collection by keeping track of all your shows in custom libraries.
            <br/>
            <img src="https://s3.amazonaws.com/goodanimesvideos/libindex.png"/>
          </p>

          <p className='blurb4'>
            <span className='blurb4-1'>Interested?</span>
              <span className='blurb4-2'>Sign up today!</span>
              <br/>
            <button onClick={this.signupClick} className='blurb-button'> Sign Up</button>
            <button onClick={this.guestLogin} className='blurb-button'> Login as Guest</button>
          </p>
        </section>
      </div>
      <Modal
        isOpen={this.state.auth}
        onRequestClose={this.modalClose}
        style={authModalStyle}>
        <SessionFormContainer formType='signup' modalClose = {this.modalClose.bind(this)}/>
      </Modal>
    </div>
    );
    }
  }


export default Greeting;

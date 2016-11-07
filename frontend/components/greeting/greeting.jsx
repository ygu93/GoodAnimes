import React from 'react';
import {Link, hashHistory} from 'react-router';
import Scroll from 'react-scroll';
const Element = Scroll.Element;
const scroller = Scroll.scroller;


class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  scrollToDesc(){
    return scroller.scrollTo('scroll-target', {smooth:true});
  }

  redirectIfLoggedIn(){
		hashHistory.push("/home");
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
          <p>
            When watching anime, finding the right anime to watch is half the battle. With goodanimes, you can always find the right
            anime for you.
          </p>

          <p>
            Browse an anime's detail page to read a detailed synopsis, see the average rating and read reviews on the show.
          </p>
          <p>
            Build your collection by keeping track of all your shows in custom libraries
          </p>
        </section>
      </div>
    </div>
    );
    }
  }


export default Greeting;

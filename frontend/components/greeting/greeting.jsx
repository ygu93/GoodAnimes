import React from 'react';
import {Link} from 'react-router';


class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let currentUser = this.props.currentUser;
    if(currentUser){
      return(
        <div>
          <h2> Hi! {currentUser.username}</h2>
        </div>
      );
    }
    else{
      return(
      <div className = 'splash'>
        <h2 className ='welcome'>Meeting your next favorite Anime</h2>
        <section className = 'descr'>
        <p>
          Finding the right anime to watch is half the battle when watching anime. With goodanimes, you can always find the right
          anime for you.
        </p>

        <p>
          Browse an anime page to read a detailed synopsis, see the average rating and read reviews on the show.
        </p>
        <p>
          Build your collection by keeping track of your shows in libraries including your own custom libraries
        </p>
        </section>
      </div>
    );
    }
  }
}

export default Greeting;

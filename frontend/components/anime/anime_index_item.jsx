import React from 'react';
import { withRouter } from 'react-router';

class AnimeIndexItem extends React.Component{
  render(){
    const handleClick = url => e => this.props.router.push(url);
    return(
      <li onClick ={handleClick(`/anime/${this.props.anime.id}`)}>
        {this.props.anime.title}
        <img src={this.props.anime.image}/>
      </li>
    );
  }
}

export default withRouter(AnimeIndexItem);

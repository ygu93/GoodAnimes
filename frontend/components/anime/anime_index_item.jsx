import React from 'react';
import { withRouter } from 'react-router';


class AnimeIndexItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const handleClick = url => e => this.props.router.push(url);
    if(this.props.anime){
    return(
      <li onClick ={handleClick(`/anime/${this.props.anime.id}`)} className='anime-index-item'>
        <img src={this.props.anime.image}/>
        <p>{this.props.anime.title}</p>
      </li>
    );
  }else{
    return null;
  }
  }
}

export default withRouter(AnimeIndexItem);

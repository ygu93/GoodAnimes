import React from 'react';
import AnimeIndexItem from './anime_index_item';

class AnimeIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className ="browse-page">
      <h2>Check out some of the top Animes</h2>
      <ul className ="anime-index">
      {this.props.animes.map((anime, idx) => <AnimeIndexItem key={idx} anime={anime}/>)}
      </ul>
    </div>
    );
  }
}

export default AnimeIndex;

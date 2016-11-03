import React from 'react-redux';
import AnimeIndexItem from 'anime_index_item';

class AnimeIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className ="anime-index">
      <ul>
      {this.props.animes.map((anime, idx) => <AnimeIndexItem key={idx} anime={anime}/>)}
      </ul>
    </div>
    );
  }
}

export default AnimeIndex;

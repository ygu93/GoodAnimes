import React from 'react';
import AddUserAnimeContainer from '../user_anime/add_user_anime_container';

class AnimeDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={
      addShelf:false,
    };
  }



  render(){
    let anime = this.props.anime;
    return(
      <div className = "anime-details-page">
        <ul className = "anime-details">
          <div className='anime-info'>
          <img src={anime.image}></img>
            <AddUserAnimeContainer animeLibrary={this.props.animeLibrary} anime={anime} currentUser={this.props.currentUser}/>
            <li><h4>Information</h4></li>
            <li><span>Type:</span> {anime.media_type}</li>
            <li><span>Episodes:</span> {anime.episodes}</li>
            <li><span>Status:</span> {anime.status}</li>
            <li><span>Started On:</span> {anime.start_date}</li>
            <li><span>Ended On:</span> {anime.end_date}</li>
            <li><span>Score:</span> {anime.score}</li>
            </div>
          <div className='anime-desc-right'>
          <li className='anime-title'><h3>{anime.title}</h3></li>
          <h4 className='synopsis'>Synopsis</h4>
          <li dangerouslySetInnerHTML={{__html:anime.synopsis}}></li>
          </div>
        </ul>
      </div>
    );
  }
}

export default AnimeDetails;

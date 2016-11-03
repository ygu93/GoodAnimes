import React from 'react';

class AnimeDetails extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let anime = this.props.anime;
    return(
      <div className = "anime-details-page">
        <ul className = "anime-details">
          <div className='anime-info'>

          <img src={anime.image}></img>
            <li><h4>Information</h4></li>
            <li>Type: {anime.media_type}</li>
            <li>Episodes: {anime.episodes}</li>
            <li>Status: {anime.status}</li>
            <li>Started On: {anime.start_date}</li>
            <li>Ended On: {anime.end_date}</li>
            <li>Score: {anime.score}</li>
            </div>
          <div>
          <li className='anime-title'><h3>{anime.title}</h3></li>
          <h4>Synopsis</h4>
          <li dangerouslySetInnerHTML={{__html:anime.synopsis}}></li>
          </div>
        </ul>
      </div>
    );
  }
}

export default AnimeDetails;

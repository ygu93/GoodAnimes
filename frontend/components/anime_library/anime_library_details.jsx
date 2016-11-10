import React from 'react';
import AnimeLibraryDetailsItem from './anime_library_details_item';

class AnimeLibraryDetails extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let animes = this.props.animeLibrary.animes;
    return(
      <div>
        <table className= 'anime-library-details'>
          <thead className= 'library-rows'>
            <tr>
              <th className='th-cover'>Cover</th>
              <th className='th-title'>Title</th>
              <th className='th-type'>Type</th>
              <th className='th-score'>Score</th>
              <th className='th-user-rating'>Your Rating</th>
              <th className='th-libraries'>Libraries</th>
              <th className='th-date-start'>Date Started</th>
              <th className='th-date-done'>Date Completed</th>
              <th></th>
              <th></th>
            </tr>
        </thead>
          {animes.map((anime, idx) => <AnimeLibraryDetailsItem key={idx} anime={anime} destroyUserAnime={this.props.destroyUserAnime} lib={this.props.animeLibrary.name}/>)}
        </table>
      </div>
    );
  }
}

export default AnimeLibraryDetails;

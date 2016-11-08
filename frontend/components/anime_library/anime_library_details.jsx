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
              <th>Cover</th>
              <th>Title</th>
              <th>Type</th>
              <th>Score</th>
              <th>Your Rating</th>
              <th>Libraries</th>
              <th>Date Started</th>
              <th>Date Completed</th>
            </tr>
        </thead>
          {animes.map((anime, idx) => <AnimeLibraryDetailsItem key={idx} anime={anime}/>)}
        </table>
      </div>
    );
  }
}

export default AnimeLibraryDetails;

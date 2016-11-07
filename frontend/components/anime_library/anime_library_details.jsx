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
              <th>Your Rating</th>
              <th>Date Started</th>
              <th>Date Completed</th>
              <th>Score</th>
              <th>Type</th>
              <th>Libraries</th>
            </tr>
        </thead>
          {animes.map((anime, idx) => <AnimeLibraryDetailsItem key={idx} anime={anime}/>)}
        </table>
      </div>
    );
  }
}

export default AnimeLibraryDetails;

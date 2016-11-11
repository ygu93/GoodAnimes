import React from 'react';
import AnimeLibraryDetailsItem from './anime_library_details_item';
import { Link } from 'react-router';

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
              <th>Review</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
        </thead>
          {animes.length > 0 ?
            animes.map((anime, idx) =>
            <AnimeLibraryDetailsItem key={idx} anime={anime} destroyUserAnime={this.props.destroyUserAnime} lib={this.props.animeLibrary.name}/>)
              : <tbody></tbody>}
        </table>
        {animes.length == 0 ? <div className='no-ani-lib'><Link to='/animes'>No Animes in this library. Click here to get Started!</Link></div> : "" }
      </div>
    );
  }
}

export default AnimeLibraryDetails;

import React from 'react';
import AddUserAnimeContainer from '../user_anime/add_user_anime_container';
import ReviewIndexContainer from '../review/review_index_container';
import NewReviewFormContainer from '../review/new_review_form_container';

class AnimeDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dropdown:false,
    };
    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown(){
    this.setState({dropdown: !this.state.dropdown});
  }



  render(){
    let anime = this.props.anime;
    return(
      <div className = "anime-details-page">
        <ul className = "anime-details">
          <div className='anime-info'>
          <img src={anime.image}></img>
          <div>
          <div className='dropdown-container'>
            <button className='dropdown-button' onClick={this.showDropdown}>Add to Shelves</button>
            <div className='dropdown'>{this.state.dropdown ? <AddUserAnimeContainer animeLibrary={this.props.animeLibrary} anime={anime} currentUser={this.props.currentUser}/> : ""}</div>
          </div>
            <li><h4>Information</h4></li>
            <li><span>Type:</span> {anime.media_type}</li>
            <li><span>Episodes:</span> {anime.episodes}</li>
            <li><span>Status:</span> {anime.status}</li>
            <li><span>Started On:</span> {anime.start_date}</li>
            <li><span>Ended On:</span> {anime.end_date}</li>
            <li><span>Score:</span> {anime.score}</li>
            </div>
          </div>
          <div className='anime-desc-right'>
          <li className='anime-title'><h3>{anime.title}</h3></li>
          <h4 className='synopsis'>Synopsis</h4>
          <li dangerouslySetInnerHTML={{__html:anime.synopsis}}></li>
          </div>
        </ul>
        <div className='new-review-form'>
          <NewReviewFormContainer animeId={this.props.anime.id}/>
        </div>

        <div className='review-index-container'>
          <ReviewIndexContainer reviews={anime.reviews}/>
        </div>
      </div>
    );
  }
}

export default AnimeDetails;

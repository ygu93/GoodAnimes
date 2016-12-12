import React from 'react';
import AddUserAnimeContainer from '../user_anime/add_user_anime_container';
import ReviewIndexContainer from '../review/review_index_container';
import NewReviewFormContainer from '../review/new_review_form_container';
import UserReviewDetails from '../review/user_review_details';
import {newReviewStyle} from '../session_form/auth_modal_style';
import Modal from 'react-modal';

class AnimeDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dropdown:false,
      editReview:false,
      newReview:false
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.showNewReview = this.showNewReview.bind(this);
    this.closeNewReview = this.closeNewReview.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  showDropdown(){
    this.setState({dropdown: true});
  }

  closeDropdown(){
    this.setState({dropdown: false});
  }

  showNewReview(){
    this.setState({newReview: true});
  }

  closeNewReview(){
    this.setState({newReview: false});
  }

  render(){
    let anime = this.props.anime;
    return(
      <div className = "anime-details-page">
        <ul className = "anime-details">
          <div className='anime-info'>
          <img src={anime.image}></img>
          <div>
          <div className='dropdown-container' onMouseLeave={this.closeDropdown}>
            <button className='dropdown-button clickable' onMouseOver={this.showDropdown}>Add to Libraries</button>
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
        <div className='your-review'>
        {anime.currentUserReview ? <div className='user-review-details'><UserReviewDetails anime={this.props.anime} review={anime.currentUserReview} /> </div>:
        <div>
        <h6 className='my-review my-rev-alt'>MY REVIEW <img className='add-rev-button clickable' onClick={this.showNewReview}src='https://s3.amazonaws.com/goodanimesvideos/092024-glossy-black-icon-signs-first-aid.png'></img></h6>
        <span className='add-a-rev-link'>You have not reviewed this anime yet</span>
        </div>
        }
        </div>


        <div className='review-index-container'>
          <ReviewIndexContainer reviews={anime.reviews}/>
        </div>

        <Modal
          isOpen={this.state.newReview}
          onRequestClose={this.closeNewReview}
          style={newReviewStyle}>
          <NewReviewFormContainer
            animeId={this.props.anime.id}
            title={this.props.anime.title}
            image={this.props.anime.image}
            closeNewReview={this.closeNewReview.bind(this)}/>
        </Modal>
      </div>
    );
  }
}

export default AnimeDetails;

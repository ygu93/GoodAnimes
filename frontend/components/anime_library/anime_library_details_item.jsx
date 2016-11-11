import React from 'react';
import { withRouter, Link } from 'react-router';
import Modal from 'react-modal';
import EditReviewFormContainer from '../review/edit_review_form_container';
import NewReviewFormContainer from '../review/new_review_form_container';
import {newReviewStyle} from '../session_form/auth_modal_style';

class AnimeLibraryDetailsItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editReview:false,
      newReview:false
    };
    this.showEditReview = this.showEditReview.bind(this);
    this.closeEditReview = this.closeEditReview.bind(this);
    this.showNewReview = this.showNewReview.bind(this);
    this.closeNewReview = this.closeNewReview.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showEditReview(){
    this.setState({editReview: true});
  }

  closeEditReview(){
    this.setState({editReview: false});
  }

  showNewReview(){
    this.setState({newReview: true});
  }

  closeNewReview(){
    this.setState({newReview: false});
  }




  handleDelete(id){
    this.props.destroyUserAnime(id);
  }


  render(){
    const handleClick = url => e => this.props.router.push(url);
    let anime = this.props.anime;
    return(
      <tbody>
        <tr className='anime-library-details-item'>
          <td onClick ={handleClick(`/anime/${anime.anime_id}`)}><img src={anime.image}/></td>
          <td onClick ={handleClick(`/anime/${anime.anime_id}`)} className='library-details-title'>{anime.title}</td>
          <td className='lib-detail-type'>{anime.type}</td>
          <td className='lib-detail-score'>{anime.score}</td>
          <td className='lib-detail-user-rating'>{(anime.currentUserReview && anime.currentUserReview.user_rating)
              ? anime.currentUserReview.user_rating : "Not Set"}</td>
          <td className='lib-detail-libs'>{anime.libraries.join(", ")}</td>
          <td className='lib-detail-startdate'>{(anime.currentUserReview && anime.currentUserReview.user_start_date)
              ? anime.currentUserReview.user_start_date : "Not Set"}</td>
            <td className='lib-detail-enddate'>{(anime.currentUserReview && anime.currentUserReview.user_end_date)
                ? anime.currentUserReview.user_end_date : "Not Set"}</td>
              {anime.currentUserReview ? <td className='rev-edit-new'onClick={this.showEditReview}>edit</td> : <td className='rev-edit-new' onClick={this.showNewReview}>new</td>}
          <td>
            <Modal
              isOpen={this.state.editReview}
              onRequestClose={this.closeEditReview}
              style={newReviewStyle}>
              <EditReviewFormContainer  anime={this.props.anime} review={this.props.anime.currentUserReview}
                closeEditReview = {this.closeEditReview.bind(this)} location="library"/>
            </Modal>
          </td>
        <td>
          <Modal
            isOpen={this.state.newReview}
            onRequestClose={this.closeNewReview}
            style={newReviewStyle}>
            <NewReviewFormContainer animeId={this.props.anime.id} closeNewReview={this.closeNewReview.bind(this)}
              image={this.props.anime.image} title={this.props.anime.title} location="library"/>
          </Modal>
        </td>
          {this.props.lib==="All" ? <td></td>: <td onClick={this.props.destroyUserAnime.bind(this, anime.user_anime_id)} className='lib-detail-delete'>X</td>}
        </tr>

      </tbody>



    );
  }
}

export default withRouter(AnimeLibraryDetailsItem);

import React from 'react';
import Modal from 'react-modal';
import EditReviewFormContainer from './edit_review_form_container';
import {newReviewStyle} from '../session_form/auth_modal_style';

class UserReviewDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editReview:false
    };
    this.showEditReview = this.showEditReview.bind(this);
    this.closeEditReview = this.closeEditReview.bind(this);
  }

  showEditReview(){
    this.setState({editReview: true});
  }

  closeEditReview(){
    this.setState({editReview: false});
  }


  render(){
    let review = this.props.review;
    return(
    <div>
    <div className='user-review-details-header'>
      <span className='my-review'>MY REVIEW</span>
       <span className='user-review-edit'onClick={this.showEditReview}>Edit</span>
    </div>
      <div className='user-review-body'>
        <li>Rating:    <span>{review.user_rating ? review.user_rating : "Not Set"}</span></li>
        <li>Date Started:      <span>{review.user_start_date ? review.user_start_date : "Not Set"}</span></li>
        <li>Date Finished:      <span>{review.user_end_date ? review.user_end_date : "Not Set"}</span></li>
        <li>Review:      <span>{review.body ? review.body : <span onClick={this.showEditReview}>Add a Review</span>}</span></li>

        <Modal
          isOpen={this.state.editReview}
          onRequestClose={this.closeEditReview}
          style={newReviewStyle}>
          <EditReviewFormContainer  anime={this.props.anime} review={this.props.review} closeEditReview = {this.closeEditReview.bind(this)}/>
        </Modal>
      </div>
    </div>
    );
  }
}


export default UserReviewDetails;

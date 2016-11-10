import React from 'react';
import Modal from 'react-modal';
import EditReviewFormContainer from './edit_review_form_container';

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
      <span>My Review</span>                    <span onClick={this.showEditReview}>Edit</span>
      <li>Rating    <span>{review.user_rating ? review.user_rating : "Not Set"}</span></li>
      <li>Date Started      <span>{review.user_start_date ? review.user_start_date : "Not Set"}</span></li>
      <li>Date Finished       <span>{review.user_end_date ? review.user_end_date : "Not Set"}</span></li>
      <li>Review      <span>{review.body ? review.body : <span onClick={this.showEditReview}>Add a Review</span>}</span></li>

      <Modal
        isOpen={this.state.editReview}
        onRequestClose={this.closeEditReview}>
        <EditReviewFormContainer  anime={this.props.anime} review={this.props.review} closeEditReview = {this.closeEditReview.bind(this)}/>
      </Modal>
    </div>
    );
  }
}


export default UserReviewDetails;

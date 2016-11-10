import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
    <div className ="all-reviews-container">
      <h2>COMMUNITY REVIEWS</h2>
      <ul className ="review-index">
      { this.props.reviews? this.props.reviews.map((review, idx) => review.body ? <ReviewIndexItem key={idx} review={review}/> : "") : ""}
      </ul>
    </div>
    );
  }
}

export default ReviewIndex;

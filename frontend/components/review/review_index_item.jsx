import React from 'react';



class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let review = this.props.review;
    return(
      <li className='review-index-item'>
        <div className='review-item-header'>
        {review.user_rating ? <span className='review-username'>{review.user.username}'s<span className='review-index-rating'> overall rating: {review.user_rating}</span></span>
        : <span className='review-username'>{review.user.username}</span>}
        <span className="review-date">{review.created_at}</span>
      </div>
        <p>{review.body}</p>
      </li>
    );
  }
}

export default ReviewIndexItem;

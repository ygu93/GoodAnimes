import React from 'react';



class ReviewIndexItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let review = this.props.review;
    return(
      <li className='review-index-item'>
        {review.user_rating ? <span>{review.user.username} rated this a {review.user_rating}</span> : <span>{review.user.username}</span>}
        <span>{review.created_at}</span>
        <p>{review.body}</p>
      </li>
    );
  }
}

export default ReviewIndexItem;

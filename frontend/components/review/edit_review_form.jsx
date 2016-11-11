import React from 'react';
import AddUserAnimeContainer from '../user_anime/add_user_anime_container';

class EditReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      user_start_date: this.props.review.user_start_date,
      user_end_date: this.props.review.user_end_date,
      user_rating: this.props.review.user_rating,
      body: this.props.review.body
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }

  handleDelete(e){
    e.preventDefault();
    if(this.props.location ==='library'){
      this.props.destroyLibReview(this.props.review);
      this.props.closeEditReview();
    }else{
      this.props.destroyReview(this.props.review);
      this.props.closeEditReview();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview({
      user_start_date: this.state.user_start_date,
      user_end_date: this.state.user_end_date,
      user_rating: this.state.user_rating,
      body: this.state.body,
      anime_id: this.props.review.anime_id,
      id: this.props.review.id
    });
    this.props.closeEditReview();
  }


  render(){
    let review = this.props.review;
    let scores =[10,9,8,7,6,5,4,3,2,1];

    return(
      <div className='new-review-container'>
        <span className='new-rev-close' onClick={this.props.closeEditReview}>X</span>
        <div className='new-review-form'>
          <div>
            <img src={this.props.anime.image}></img>
          </div>
          <div>
            <h6>Your review of </h6>
            <h5>{this.props.anime.title}</h5>
            <form onSubmit={this.handleSubmit}>
              <span className='new-rev-field-rating'>My Rating</span>
              <select onChange={this.updateForm("user_rating")} defaultValue={review.user_rating}>
                {scores.map((score, idx) =>
                  <option key={idx} value={score}>{score}</option>)}
              </select>
              <br/>
              <br/>
              <span className='new-rev-field-date-start'>Date I Started this anime:</span><input type='date'
                defaultValue={review.user_start_date ? review.user_start_date : ""}
                onInput={this.updateForm("user_start_date")}/>
              <br/>
              <br/>
              <div className='new-rev-field-date-end'>
              <span>Date I finished this anime:</span> <input type='date'
                defaultValue={review.user_end_date ? review.user_end_date : ""} onInput={this.updateForm("user_end_date")}/>
              </div>
              <br/>
              <p className='new-rev-body-head'>What did you think?</p>
              <br/>
              <textarea className='new-rev-body' onChange={this.updateForm("body")} defaultValue={review.body} rows="15" cols="100"></textarea>
              <br/>
              <button className='new-rev-save'>Save</button>
            </form>
            <footer className='edit-del-rev'>
            <span onClick={this.handleDelete}>Delete review</span>
            </footer>
          </div>
          </div>
      </div>
    );
  }
}

export default EditReviewForm;

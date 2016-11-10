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
  }

  updateForm(label){
    return e => this.setState({[label]: e.target.value});
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
      <div className='edit-useranime-container'>
        <h6 onClick={this.props.closeEditReview}>X</h6>
        <div>
          <img src={this.props.anime.image}></img>
        </div>
        <div>
          <span>Your review of {this.props.anime.title}</span>
          <form onSubmit={this.handleSubmit}>
            <span>Your Rating</span>
            <select onChange={this.updateForm("user_rating")} defaultValue={review.user_rating}>
              {scores.map((score, idx) =>
                <option key={idx} value={score}>{score}</option>)}
            </select>
            <br/>
            <span>Date Started:</span><input type='date'
              defaultValue={review.user_start_date ? review.user_start_date : ""}
              onInput={this.updateForm("user_start_date")}/>
            <br/>
            <span>Date Ended:</span> <input type='date'
              defaultValue={review.user_end_date ? review.user_end_date : ""} onInput={this.updateForm("user_end_date")}/>
            <br/>
            <span>What did you think?</span>
            <textarea onChange={this.updateForm("body")} defaultValue={review.body}></textarea>
            <button>Save</button>
          </form>
          <span onClick={this.props.destroyReview.bind(this, this.props.review)}>Delete review</span>
        </div>
      </div>
    );
  }
}

export default EditReviewForm;

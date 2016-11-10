import React from 'react';

class NewReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      user_start_date: "",
      user_end_date: "",
      user_rating: "",
      body: "",
      anime_id:this.props.animeId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.animeId){
      this.setState({anime_id:nextProps.animeId});
    }
  }

  updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }


  render(){
    let userAnime = this.props.userAnime;
    const scores =[10,9,8,7,6,5,4,3,2,1];

    return(
      <div className='new-review-container'>
        <div>
          <h6>Add a review</h6>
          <form onSubmit={this.handleSubmit}>
            <span> My Rating</span>
            <select onChange={this.updateForm("user_rating")}>
              <option></option>
              {scores.map((score, idx)=> <option key={idx} value={score}>{score}</option>)}
            </select>
            <br/>
            <span>Date I Started this anime:</span><input type='date' onInput={this.updateForm("user_start_date")}/>
            <br/>
            <span>Date I finished this anime:</span> <input type='date'onInput={this.updateForm("user_end_date")}/>
            <br/>
            <span>What did you think?</span>
            <br/>
            <textarea onChange={this.updateForm("body")} placeholder="Add your review" rows="10" cols="50"></textarea>
            <br/>
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewReviewForm;

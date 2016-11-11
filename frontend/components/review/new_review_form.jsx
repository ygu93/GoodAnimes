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
    this.props.closeNewReview();
  }


  render(){
    let userAnime = this.props.userAnime;
    const scores =[10,9,8,7,6,5,4,3,2,1];

    return(
      <div className='new-review-container'>
        <span className='new-rev-close' onClick={this.props.closeNewReview}>x</span>
        <div className='new-review-form'>
          <div>
          <img src={this.props.image}/>
          </div>
          <div>
            <h6>Add a review of </h6>
            <h5>{this.props.title}</h5>
            <form onSubmit={this.handleSubmit}>
              <span className='new-rev-field-rating'> My Rating:</span>
              <select onChange={this.updateForm("user_rating")}>
                <option></option>
                {scores.map((score, idx)=> <option key={idx} value={score}>{score}</option>)}
              </select>
              <br/>
              <br/>
              <span className='new-rev-field-date-start'>Date I Started this anime:</span><input type='date' onInput={this.updateForm("user_start_date")}/>
              <br/>
              <br/>
              <div className='new-rev-field-date-end'>
              <span>Date I finished this anime:</span><input type='date'onInput={this.updateForm("user_end_date")}/>
              </div>
              <br/>
              <p className='new-rev-body-head'>What did you think?</p>
              <br/>
              <textarea className='new-rev-body'onChange={this.updateForm("body")} placeholder="Add your review" rows="15" cols="100"></textarea>
              <br/>
              <button className='new-rev-save'>Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewReviewForm;

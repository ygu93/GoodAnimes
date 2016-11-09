import React from 'react';
import AddUserAnimeContainer from './add_user_anime_container';

class EditUserAnimeForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      user_start_date: this.props.userAnime.user_start_date,
      user_end_date: this.props.userAnime.user_end_date,
      user_rating: this.props.userAnime.user_rating,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUserAnime({user_start_date: this.state.user_start_date,
      user_end_date: this.state.user_end_date,
      user_rating: this.state.user_rating,
      anime_id: this.props.userAnime.anime_id,
      anime_library_id: this.props.userAnime.anime_library_id,
      id: this.props.userAnime.user_anime_id
    });
  }


  render(){
    let userAnime = this.props.userAnime;
    let scores =[10,9,8,7,6,5,4,3,2,1];

    return(
      <div className='edit-useranime-container'>
        <div>
        </div>
        <div>
          <h6>Your review of {userAnime.anime.title}</h6>
          <form onSubmit={this.handleSubmit}>
            <span>Your Score</span>
            <select>
              {scores.forEach((score)=> <option value={score}
              selected={this.props.userAnime.user_rating === score ? "selected" : ""} onChange={this.updateForm("user_rating")}>{score}</option>)}
            </select>
            <span>Date Started:</span><input type='date'
              value={this.props.userAnime.user_start_date ? this.props.userAnime.user_start_date : ""}
              onChange={this.updateForm("user_start_date")}/>
            <span>Date Ended:</span> <input type='date'
              value={this.props.userAnime.user_end_date ? this.props.userAnime.user_end_date : ""} onChange={this.updateForm("user_end_date")}/>
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUserAnimeForm;

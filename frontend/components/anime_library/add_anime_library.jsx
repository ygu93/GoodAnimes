import React from 'react';

class AddAnimeLibrary extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      user_id:this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const library = this.state;
    this.props.createAnimeLibrary(library);
  }


  updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }
  render(){
    return(
      <div className='add-library'>
        <form className='add-lib-form' onSubmit={this.handleSubmit}>
          <label htmlFor="library-name"></label>
          <input type='text' name='anime_library[name]' onChange={this.updateForm("name")} id="library-name" placeholder="Add a Library"></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddAnimeLibrary;

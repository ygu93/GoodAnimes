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
      <div className='AddLibrary'>
        <h6>Add a Library:</h6>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="library-name"></label>
          <input type='text' name='anime_library[name]' onChange={this.updateForm("name")} id="library-name"></input>
          <button>add</button>
        </form>
      </div>
    );
  }
}

export default AddAnimeLibrary;

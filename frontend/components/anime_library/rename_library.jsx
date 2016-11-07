import React from 'react';

class RenameAnimeLibrary extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      rename: false,
      name: this.props.library.name,
      id: this.props.library.id
    };
    this.showRename = this.showRename.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showRename(){
    this.setState({rename: !this.state.rename});
  }

  handleSubmit(e){
    e.preventDefault();
    this.showRename();
    this.props.updateAnimeLibrary({name:this.state.name, id:this.state.id});
  }

  updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }


  render(){
    let library = this.props.library;
    return(
      this.state.rename ?
      <form onSubmit={this.handleSubmit}>
        <label>
        <input type="text" value={this.state.name} name='anime_library[name]'onChange={this.updateForm("name")}></input>
        </label>
          <button>Save</button>
          <span onClick={this.showRename}>Cancel</span>
      </form>
      :<div>{library.name} ({library.animes.length}) <span onClick={this.showRename}>rename</span></div>
    );
  }
}

export default RenameAnimeLibrary;

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
      <form onSubmit={this.handleSubmit} className='rename-lib-form'>
        <label>
        <input type="text" value={this.state.name} name='anime_library[name]'onChange={this.updateForm("name")}></input>
        </label>
          <button className='rename-save'>Save</button>
          <span onClick={this.showRename} className='rename-cancel'>Cancel</span>
      </form>
      :<div className='edit-lib-lib-name'>{library.name} ({library.animes.length}) <span className='rename-show' onClick={this.showRename}>rename</span></div>
    );
  }
}

export default RenameAnimeLibrary;

import React from 'react';
import AddAnimeLibraryContainer from './add_anime_library_container';
import RenameAnimeLibrary from './rename_library';


class EditAnimeLibraryForm extends React.Component{
  constructor(props){
    super(props);
  }




  render(){
    return(
      <div className="edit-library">
        <h6 onClick={this.props.modalClose}>Close</h6>
        <div className="edit-library-add"><AddAnimeLibraryContainer/></div>
      {this.props.animeLibrary.slice(4).map((library, idx) =>
        <li key={idx}>
          <span onClick={this.props.destroyAnimeLibrary.bind(this, library.id)}>X</span>
          <RenameAnimeLibrary library={library} updateAnimeLibrary={this.props.updateAnimeLibrary}/>
        </li> )}
      </div>
    );
  }
}

export default EditAnimeLibraryForm;

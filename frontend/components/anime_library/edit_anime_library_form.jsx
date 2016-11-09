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
        <span className='edit-lib-close'onClick={this.props.modalClose}>Close</span>
        <br/>
        <br/>
        <div className="edit-library-add"><AddAnimeLibraryContainer/></div>
        <p className='edit-header'>Libraries</p>
      {this.props.animeLibrary.slice(4).map((library, idx) =>
        <li key={idx} className='edit-lib-libs'>
          <span className='edit-lib-del' onClick={this.props.destroyAnimeLibrary.bind(this, library.id)}>X</span>
          <RenameAnimeLibrary className='lib-rename'library={library} updateAnimeLibrary={this.props.updateAnimeLibrary}/>
        </li> )}
      </div>
    );
  }
}

export default EditAnimeLibraryForm;

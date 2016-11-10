import React from 'react';
import AnimeLibraryDetails from './anime_library_details';
import AddAnimeLibraryContainer from './add_anime_library_container';
import EditAnimeLibraryFormContainer from './edit_anime_library_form_container';
import Modal from 'react-modal';
import {editLibStyle} from '../session_form/auth_modal_style';


document.addEventListener("DOMContentLoaded", function(){
  Modal.setAppElement(document);
});

class AnimeLibraryIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      library: this.props.animeLibrary[0],
      addLibrary: false,
      editLibrary:false
    };
    this.__revealAddLibrary = this.__revealAddLibrary.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.openEditForm = this.openEditForm.bind(this);
    this.__hideAddLibrary = this.__hideAddLibrary.bind(this);
  }

  modalClose(){
    this.setState({editLibrary: false});
  }

  componentWillReceiveProps(nextProps){
    let index = this.props.animeLibrary.indexOf(this.state.library);
    if(this.props.animeLibrary.length === 0){
      this.setState({library: nextProps.animeLibrary[0]});
    }else if(this.props.animeLibrary[1].id !== nextProps.animeLibrary[1].id){
      this.setState({library: nextProps.animeLibrary[0]});
    }else if(this.props.animeLibrary.length < nextProps.animeLibrary.length){
      this.__hideAddLibrary();
    }else if(this.props.animeLibrary[index].animes.length !== nextProps.animeLibrary[index].animes.length){
      this.setState({library: nextProps.animeLibrary[index]});
    }
  }




  __handleClick(library){
    this.setState({library:library});
  }

  __revealAddLibrary(){
    this.setState({addLibrary: true});
  }

  __hideAddLibrary(){
    this.setState({addLibrary: false});
  }

  __handleDelete(id){
    this.props.destroyAnimeLibrary(id);
  }

  openEditForm(){
    this.setState({editLibrary: true});
  }

  // className={library === this.state.library ? selected : ""}



  render(){
    return(
      <div>
        <div className ="anime-library-index">
          <h2> My Animes </h2>
          <div className ="home-page">
            <div className="libraries">
              <span>Anime Libraries <span className='edit-lib'onClick={this.openEditForm}>(edit)</span></span>
              <ul className="default-anime-libraries">
                {this.props.animeLibrary.slice(0,4).map((library, idx) => <li onClick={this.__handleClick.bind(this,library)} key={idx}>
                {library.name} ({library.animes.length})</li>)}
              </ul>
              <ul className="custom-anime-libraries">
                {this.props.animeLibrary.slice(4).map((library, idx) => <li onClick={this.__handleClick.bind(this,library)} key={idx}>
                {library.name} ({library.animes.length})</li>)}
              </ul>
              {this.state.addLibrary ? <AddAnimeLibraryContainer/> :
                <button className='add-library-button' onClick={this.__revealAddLibrary}>Add Library</button>}
                </div>
                <div className='library-details'>
                  {this.state.library ? <AnimeLibraryDetails animeLibrary={this.state.library } destroyUserAnime={this.props.destroyUserAnime.bind(this)}/> : ""}
                </div>
              </div>
            </div>
            <Modal
              isOpen={this.state.editLibrary}
              onRequestClose={this.modalClose}
              style={editLibStyle}>
              <EditAnimeLibraryFormContainer modalClose = {this.modalClose.bind(this)}/>
            </Modal>

          </div>
        );
      }
    }



export default AnimeLibraryIndex;

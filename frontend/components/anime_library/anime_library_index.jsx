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
    }else if(this.props.animeLibrary.length > nextProps.animeLibrary.length){
      this.setState({library: nextProps.animeLibrary[0]});
    }else{
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

  loader(){
    return(
      <div className="sequence">

  <div className="seq-preloader">
    <svg width="39" height="16" viewBox="0 0 39 16" xmlns="http://www.w3.org/2000/svg"
      className="seq-preload-indicator"><title>Sequence Preloader Icon</title><desc>Three orange dots increasing in size from left to right</desc><g fill="#F96D38">
      <path className="seq-preload-circle seq-preload-circle-1" d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"/>
      <path className="seq-preload-circle seq-preload-circle-2" d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"/>
      <path className="seq-preload-circle seq-preload-circle-3" d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"/></g></svg>
  </div>

</div>
    );
  }



  render(){
    let loading = (this.props.loading ? this.loader() : "");
    return(
      <div>
        <div className ="anime-library-index">
          <h2> My Animes </h2>
          {loading}
          <div className ="home-page">
            <div className="libraries">
              <span>Anime Libraries <span className='edit-lib'onClick={this.openEditForm}>(edit)</span></span>
              <ul className="default-anime-libraries">
                {this.props.animeLibrary.slice(0,4).map((library, idx) => <li className={library === this.state.library ? "selected-lib" : ""} onClick={this.__handleClick.bind(this,library)} key={idx}>
                {library.name} ({library.animes ? library.animes.length : 0})</li>)}
              </ul>
              <ul className="custom-anime-libraries">
                {this.props.animeLibrary.slice(4).map((library, idx) => <li className={library === this.state.library ? "selected-lib" : ""} onClick={this.__handleClick.bind(this,library)} key={idx}>
                {library.name} ({library.animes ? library.animes.length: 0})</li>)}
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

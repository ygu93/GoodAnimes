import React from 'react';
import AnimeLibraryDetails from './anime_library_details';
import AddAnimeLibraryContainer from './add_anime_library_container';


class AnimeLibraryIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      library:null,
      addLibrary: false
    };
    this.__revealAddLibrary = this.__revealAddLibrary.bind(this);
  }


  componentWillReceiveProps(nextProps){
    this.setState({library: nextProps.animeLibrary[0]});
  }

  __handleClick(library){
    this.setState({library:library});
  }

  __revealAddLibrary(){
    this.setState({addLibrary: !this.state.addLibrary});
  }






  render(){
    return(
      <div>
          <div className ="anime-library-index">
            <h2> My Animes</h2>
            <div className ="home-page">
              <div className="libraries">
                <h4>Anime Libraries</h4>
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
                {this.state.library ? <AnimeLibraryDetails animeLibrary={this.state.library}/> : ""}
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default AnimeLibraryIndex;

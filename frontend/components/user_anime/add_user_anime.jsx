import React from 'react';



class AddUserAnime extends React.Component{
  constructor(props){
    super(props);
    this.__handleCheck = this.__handleCheck.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.anime.libraries){
      this.setState({anime: nextProps.anime});
    }
  }

  __handleCheck(e){
    let libId = parseInt(e.target.value);
    if(e.target.checked === true){
      this.props.createUserAnime({user_id:this.props.currentUser.id, anime_id:this.props.anime.id, anime_library_id:libId});
    }else if(e.target.checked === false){
      let library = this.props.animeLibrary.filter((lib) => lib["id"] === libId)[0];
      let userAnimeId = library.animes.filter((ani) => ani.anime_id === this.props.anime.id);
      userAnimeId = userAnimeId[0].user_anime_id;
      this.props.destroyUserAnime(userAnimeId);

    }
  }

  render(){
    let libraries = this.props.animeLibrary;
    let anime= this.props.anime;
    return(
      <div className="add-user-anime">
        <form>
            {libraries.slice(1,4).map((library, idx) => <div key={idx}><input key={idx} name="default libraries" type="radio"
              defaultChecked={anime.libraries ? anime.libraries.includes(library.name) : false} value={library.id} onChange={this.__handleCheck}/> {library.name}</div>)}
            {libraries.slice(4).map((library, idx) => <div key={idx}><input key={idx} type="checkbox" value={library.id}
              defaultChecked={anime.libraries ? anime.libraries.includes(library.name) : false} onChange={this.__handleCheck}/>{library.name}</div>)}
        </form>
      </div>
    );
  }
}



export default AddUserAnime;

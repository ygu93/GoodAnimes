import React from 'react';



class AddUserAnime extends React.Component{
  constructor(props){
    super(props);
    this.__handleCheck = this.__handleCheck.bind(this);
    this.__handleRadio = this.__handleRadio.bind(this);
  }

  componentWillReceiveProps(nextProps){

    if(nextProps.anime.libraries){
      this.setState({anime: nextProps.anime});
    }
  }

  __handleRadio(e){
    let defaultLibIds = this.props.animeLibrary.slice(1,4).map((lib) => lib.id);
    defaultLibIds.forEach((libId) => {
      let library = this.props.animeLibrary.filter((lib) => lib["id"] === libId)[0];
      let userAnime = library.animes.filter((ani) => ani.anime_id === this.props.anime.id);
      if(userAnime.length !== 0){
        userAnime.forEach((userAni)=> this.props.destroyUserAnime(userAni.user_anime_id));
        }
      });
    let createLibId = parseInt(e.target.value);
    this.props.createUserAnime({user_id:this.props.currentUser.id, anime_id:this.props.anime.id, anime_library_id:createLibId});
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

  loader(){
    return(
      <div className='load-container'>
        <div className="sk-fading-circle">
          <div className="sk-circle1 sk-circle"></div>
          <div className="sk-circle2 sk-circle"></div>
          <div className="sk-circle3 sk-circle"></div>
          <div className="sk-circle4 sk-circle"></div>
          <div className="sk-circle5 sk-circle"></div>
          <div className="sk-circle6 sk-circle"></div>
          <div className="sk-circle7 sk-circle"></div>
          <div className="sk-circle8 sk-circle"></div>
          <div className="sk-circle9 sk-circle"></div>
          <div className="sk-circle10 sk-circle"></div>
          <div className="sk-circle11 sk-circle"></div>
          <div className="sk-circle12 sk-circle"></div>
      </div>
    </div>
    );
  }

  render(){
    let libraries = this.props.animeLibrary;
    let anime= this.props.anime;
    let loading = (this.props.loading ? this.loader() : "");
    return(
      <div className="add-user-anime">
        {loading}
        <form>
            {libraries.slice(1,4).map((library, idx) => <label className = 'clickable' key={idx}><input key={idx} name="default libraries" type="radio"
              defaultChecked={anime.libraries ? anime.libraries.includes(library.name) : false} value={library.id} onChange={this.__handleRadio}/> {library.name}</label>)}
            {libraries.slice(4).map((library, idx) => <label className='clickable' key={idx}><input key={idx} type="checkbox" value={library.id}
              defaultChecked={anime.libraries ? anime.libraries.includes(library.name) : false} onChange={this.__handleCheck}/>{library.name} </label>)}
        </form>
      </div>
    );
  }
}



export default AddUserAnime;

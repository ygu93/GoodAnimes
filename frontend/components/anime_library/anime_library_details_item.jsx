import React from 'react';
import { withRouter, Link } from 'react-router';

class AnimeLibraryDetailsItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id){
    this.props.destroyUserAnime(id);
  }


  render(){
    const handleClick = url => e => this.props.router.push(url);
    let anime = this.props.anime;
    return(
      <tbody>
        <tr className='anime-library-details-item'>
          <td onClick ={handleClick(`/anime/${anime.anime_id}`)}><img src={anime.image}/></td>
          <td onClick ={handleClick(`/anime/${anime.anime_id}`)} className='library-details-title'>{anime.title}</td>
          <td className='lib-detail-type'>{anime.type}</td>
          <td className='lib-detail-score'>{anime.score}</td>
          <td className='lib-detail-user-rating'>{anime.user_rating ? anime.user_rating : "Not Set"}</td>
          <td className='lib-detail-libs'>{anime.libraries.join(", ")}</td>
          <td className='lib-detail-startdate'>{anime.user_start_date ? anime.user_start_date : "Not Set"}</td>
          <td className='lib-detail-enddate'>{anime.user_end_date ? anime.user_end_date : "Not Set"}</td>
          <td>edit</td>
          {this.props.lib==="All" ? <td></td>: <td onClick={this.props.destroyUserAnime.bind(this, anime.user_anime_id)} className='lib-detail-delete'>X</td>}
        </tr>
      </tbody>


    );
  }
}

export default withRouter(AnimeLibraryDetailsItem);

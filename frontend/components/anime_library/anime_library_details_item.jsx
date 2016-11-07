import React from 'react';
import { withRouter } from 'react-router';


class AnimeLibraryDetailsItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const handleClick = url => e => this.props.router.push(url);
    let anime = this.props.anime;
    return(
      <tbody>
        <tr className='anime-library-details-item'>
          <td onClick ={handleClick(`/anime/${anime.anime_id}`)}><img src={anime.image}/></td>
          <td onClick ={handleClick(`/anime/${anime.anime_id}`)} className='library-details-title'>{anime.title}</td>
          <td>{anime.user_rating ? anime.user_rating : "Not Set"}</td>
          <td>{anime.user_start_date ? anime.user_start_date : "Not Set"}</td>
          <td>{anime.user_end_date ? anime.user_end_date : "Not Set"}</td>
          <td>{anime.score}</td>
          <td>{anime.type}</td>
          <td>{anime.libraries.map((library, idx) => <li key={idx}>{library}</li>)}</td>
        </tr>
      </tbody>
    );
  }
}

export default withRouter(AnimeLibraryDetailsItem);

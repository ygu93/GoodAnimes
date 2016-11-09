import {connect} from 'react-redux';
import AnimeLibraryIndex from './anime_library_index';
import {requestAnimeLibrary, destroyAnimeLibrary, updateAnimeLibrary} from '../../actions/anime_library_actions';
import {selectAllAnimeLibrary} from '../../reducers/selector';
import {destroyUserAnime} from '../../actions/user_anime_actions';

 const mapStateToProps = state => ({
   currentUser: state.session.currentUser,
   animeLibrary: selectAllAnimeLibrary(state)
 });

 const mapDispatchToProps = (dispatch) => ({
   requestAnimeLibrary: (id) => dispatch(requestAnimeLibrary(id)),
   destroyAnimeLibrary: (id) => dispatch(destroyAnimeLibrary(id)),
   updateAnimeLibrary: (animeLibrary) => dispatch(updateAnimeLibrary(animeLibrary)),
   destroyUserAnime: (id) => dispatch(destroyUserAnime(id))

 });

 export default connect(mapStateToProps, mapDispatchToProps)(AnimeLibraryIndex);

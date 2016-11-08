import {connect} from 'react-redux';
import AnimeDetails from './anime_details';
import {selectAllAnimeLibrary} from '../../reducers/selector';

const mapStateToProps = state=> ({
  currentUser: state.session.currentUser,
  anime: state.anime,
  animeLibrary: selectAllAnimeLibrary(state)
});

export default connect(mapStateToProps)(AnimeDetails);

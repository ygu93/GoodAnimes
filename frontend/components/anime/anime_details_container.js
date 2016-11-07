import {connect} from 'react-redux';
import AnimeDetails from './anime_details';

const mapStateToProps = state=> ({
  currentUser: state.session.currentUser,
  anime: state.anime
});

export default connect(mapStateToProps)(AnimeDetails);

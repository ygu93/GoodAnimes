import {connect} from 'react-redux';
import AnimeDetails from './anime_details';

const mapStateToProps = state=> ({
  anime: state.anime
});

export default connect(mapStateToProps)(AnimeDetails);

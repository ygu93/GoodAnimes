import {connect} from 'react-redux';
import AnimeIndex from './anime_index';

const mapStateToProps = state => ({
  animes: state.anime
});

export default connect(mapStateToProps)(AnimeIndex);

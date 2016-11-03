import {connect} from 'react-redux';
import AnimeIndex from './anime_index';
import {selectAllAnime} from '../../reducers/selector';

const mapStateToProps = state => ({
  animes: selectAllAnime(state)
});

export default connect(mapStateToProps)(AnimeIndex);

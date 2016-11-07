import AddAnimeLibrary from './add_anime_library';
import {connect} from 'react-redux';
import {createAnimeLibrary} from '../../actions/anime_library_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.animeLibrary.errors ? state.animeLibrary.errors : []
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAnimeLibrary: library => dispatch(createAnimeLibrary(library))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAnimeLibrary);

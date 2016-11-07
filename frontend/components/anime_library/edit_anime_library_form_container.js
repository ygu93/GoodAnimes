import {connect} from 'react-redux';
import EditAnimeLibraryForm from './edit_anime_library_form';
import {destroyAnimeLibrary, updateAnimeLibrary} from '../../actions/anime_library_actions';
import {selectAllAnimeLibrary} from '../../reducers/selector';

 const mapStateToProps = state => ({
   currentUser: state.session.currentUser,
   animeLibrary: selectAllAnimeLibrary(state)
 });

 const mapDispatchToProps = (dispatch, ownProps) => ({
   destroyAnimeLibrary: (id) => dispatch(destroyAnimeLibrary(id)),
   updateAnimeLibrary: (animeLibrary) => dispatch(updateAnimeLibrary(animeLibrary)),
   modalClose: () => ownProps.modalClose()

 });

 export default connect(mapStateToProps, mapDispatchToProps)(EditAnimeLibraryForm);

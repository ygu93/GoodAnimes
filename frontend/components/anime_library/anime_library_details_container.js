import {connect} from 'react-redux';
import AnimeLibraryDetails from './anime_library_details';

const mapStateToProps = (state, ownProps)=> ({
  animeLibrary: state.animeLibrary
});

export default connect(mapStateToProps)(AnimeLibraryDetails);

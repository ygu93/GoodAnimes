import {connect} from 'react-redux';
import AddUserAnime from './add_user_anime';
import {createUserAnime, destroyUserAnime} from '../../actions/user_anime_actions';


 const mapStateToProps = (state, ownProps) => ({
   currentUser: state.session.currentUser,
   animeLibrary: ownProps.animeLibrary,
   anime: ownProps.anime,
   loading:state.loading
 });

 const mapDispatchToProps = (dispatch) => ({
   createUserAnime: (userAnime) => dispatch(createUserAnime(userAnime)),
   destroyUserAnime: (id) => dispatch(destroyUserAnime(id))
 });

 export default connect(mapStateToProps, mapDispatchToProps)(AddUserAnime);

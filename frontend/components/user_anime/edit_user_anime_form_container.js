import {connect} from 'react-redux';
import EditUserAnimeForm from './edit_user_anime_form';
import {updateUserAnime} from '../../actions/user_anime_actions';

const mapStateToProps = (state, ownProps) => ({
  userAnime: state.userAnime
});

const mapDispatchToProps = (dispatch) => ({
    updateUserAnime: (userAnime) => dispatch(updateUserAnime(userAnime))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserAnimeForm);

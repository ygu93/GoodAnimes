import {connect} from 'react-redux';
import NewReviewForm from './new_review_form';
import {createReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  animeId: ownProps.animeId
});

const mapDispatchToProps = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewReviewForm);

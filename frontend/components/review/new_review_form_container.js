import {connect} from 'react-redux';
import NewReviewForm from './new_review_form';
import {createReview, createLibReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  animeId: ownProps.animeId
});

const mapDispatchToProps = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review)),
    createLibReview: (review) => dispatch(createLibReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewReviewForm);

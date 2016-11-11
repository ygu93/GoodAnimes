import {connect} from 'react-redux';
import EditReviewForm from './edit_review_form';
import {updateReview, destroyReview, destroyLibReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  review: ownProps.review,
  anime: ownProps.anime,
  reviewErrors: state.review
});

const mapDispatchToProps = (dispatch) => ({
    updateReview: (review) => dispatch(updateReview(review)),
    destroyReview: (review) => dispatch(destroyReview(review)),
    destroyLibReview: (review) => dispatch(destroyLibReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);

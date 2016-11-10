import {connect} from 'react-redux';
import ReviewIndex from './review_index';
import {selectAllReviews} from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => ({
  reviews: ownProps.reviews
});

export default connect(mapStateToProps)(ReviewIndex);

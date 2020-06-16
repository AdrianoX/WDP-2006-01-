import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, updateRating } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  updateRating: (payload, stars) => dispatch(updateRating(payload, stars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);

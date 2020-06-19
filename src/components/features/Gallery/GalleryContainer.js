import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getAll, updateRating } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  updateRating: (stars, payload) => dispatch(updateRating(payload, stars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

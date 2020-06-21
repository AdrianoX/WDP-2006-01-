import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, updateRating } from '../../../redux/productsRedux';
import { favoriteId, setFavorite, removeFavorite } from '../../../redux/favoriteRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state),
  isFavorite: favoriteId(state, props.id),
});

const mapDispatchToProps = dispatch => ({
  updateRating: (payload, stars) => dispatch(updateRating(payload, stars)),
  setFavorite: id => dispatch(setFavorite({id})),
  removeFavorite: id => dispatch(removeFavorite({id})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);

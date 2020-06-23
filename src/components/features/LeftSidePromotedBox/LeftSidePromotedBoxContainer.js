import LeftSidePromotedBox from './LeftSidePromotedBox';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/promotedRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(LeftSidePromotedBox);

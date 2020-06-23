import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftSidePromotedBox.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import StarRating from '../../common/StarRating/StarRating';
import LeftSlider from '../LeftSlider/LeftSlider';

class LeftSidePromotedBox extends React.Component {
  render() {
    const { name, id, oldPrice, price } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <LeftSlider />
          <div className={styles.content}>
            <Link to={`/product/${id}`}>
              <h5>{name}</h5>
            </Link>
            <StarRating />
          </div>
          <div className={styles.line}>tu ma być linia</div>
          <div className={styles.actions}>
            <div className={styles.outlines}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.oldPrice}>$ {oldPrice}</div>
            <div className={styles.price}>
              <Button noHover variant='small'>
                $ {price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeftSidePromotedBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default LeftSidePromotedBox;

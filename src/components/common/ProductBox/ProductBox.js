import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

const ProductBox = ({
  name,
  price,
  promo,
  updateRating,
  compare,
  favorite,
  oldPrice,
  rated,
  stars,
  id,
  bgImageUrl,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <Link to={`/product/${id}`}>
        <img src={bgImageUrl} alt={name} />
      </Link>
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <Link to={`/product/${id}`}>
        <h5>{name}</h5>
      </Link>
      <StarRating stars={stars} rated={rated} updateRating={updateRating} id={id} />
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline' className={favorite === 'yes' ? styles.active : ''}>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline' className={compare === 'yes' ? styles.active : ''}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.string,
  compare: PropTypes.string,
  bgImageUrl: PropTypes.string,
  updateRating: PropTypes.func,
  rated: PropTypes.bool,
  id: PropTypes.string,
};

export default ProductBox;

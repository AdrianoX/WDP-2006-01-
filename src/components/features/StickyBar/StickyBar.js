import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';

class StickyBar extends React.Component {

  render() {
    const { compareProduct } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.image}>
          {compareProduct.map(product =>
            <img key={product.toString()} src={product.bgImageUrl} alt={product.id} />
          )}
        </div>
      </div>
    );
  }
}

StickyBar.propTypes = {
  compareProduct: PropTypes.array,
};


export default StickyBar;
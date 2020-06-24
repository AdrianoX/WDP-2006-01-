import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';

class StickyBar extends React.Component {
  render() {
    const { compareProduct, removeCompare } = this.props;

    return (
      <div className={styles.wrapper}>
        {compareProduct.map(product => (
          <div key={product} className={styles.image}>
            <img src={product.bgImageUrl} alt={product.id}></img>
            <span className={styles.close} onClick={() => removeCompare(product)}>
              X
            </span>
          </div>
        ))}
      </div>
    );
  }
}

StickyBar.propTypes = {
  compareProduct: PropTypes.array,
  bgImageUrl: PropTypes.string,
  removeCompare: PropTypes.func,
};

export default StickyBar;

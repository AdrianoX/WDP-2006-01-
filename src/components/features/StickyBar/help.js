import React from 'react';
import styles from './StickyBar.module.scss';
import PropTypes from 'prop-types';
import { removeCompare } from '../../../redux/compareRedux';

class StickyBar extends React.Component {
  render() {
    const { compareProduct, bgImageUrl } = this.props;

    return (
      <div className={styles.wrapper}>
        {compareProduct.map(product => (
          <div key={product.toString()} className={styles.image}>
            <img src={product.bgImageUrl} alt={product.id}></img>
            <span className={styles.close} onClick={e => removeCompare(bgImageUrl)}>
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
};

export default StickyBar;

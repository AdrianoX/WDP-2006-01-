import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import More from '../../features/More/MoreContainer';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <More />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;

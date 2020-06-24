import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className={'container'}>
      <div className={'row'}>
        <div className={'col-sm-12 col-md-8 ' + styles.left}>Lewa kolumna</div>
        <div className={'col-sm-12 col-md-4 ' + styles.right}>Prawa kolumna</div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;

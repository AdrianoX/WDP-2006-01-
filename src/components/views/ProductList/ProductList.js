import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import FilterCategories from '../../features/FilterCategories/FilterCategories';

import ColourFilter from './../Filters/ColourFilter';

const ProductList = () => (
  <div className={styles.root}>
    <div className={'container'}>
      <div className={'row'}>
        <div className={'col-sm-12 col-md-9 ' + styles.left}>Lewa kolumna</div>
        <div className={'col-sm-12 col-md-3 ' + styles.right}>
          <FilterCategories />
          <ColourFilter />
        </div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;

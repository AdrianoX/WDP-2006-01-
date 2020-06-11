import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.mainCategoryList}>
        <li className={styles.mainCategory}>
          <a value='#'>Select a category</a>
        </li>
        <li className={styles.secCategory}>
          <a value='#'> CHAIR</a>
        </li>
        <li className={styles.secCategory}>
          <a value='#'> TABLE</a>
        </li>
        <li className={styles.secCategory}>
          <a value='#'> SOFA</a>
        </li>
        <li className={styles.secCategory}>
          <a value='#'> BEDROOM</a> {/*value C.L */}
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;

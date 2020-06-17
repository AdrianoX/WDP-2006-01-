import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

import NavBar from '../../common/NavBar/NavBar';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row justify-content-around flex-xl-row flex-md-column align-items-center'>
        <div className='col-auto mt-3 '>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul className={'flex-wrap justify-content-around'}>
            <li>
              <a href='#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Furniture</a>
            </li>
            <li>
              <a href='#'>Chair</a>
            </li>
            <li>
              <a href='#'>Table</a>
            </li>
            <li>
              <a href='#'>Sofa</a>
            </li>
            <li>
              <a href='#'>Bedroom</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>

        <div className='col-4'>
          <NavBar />
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;

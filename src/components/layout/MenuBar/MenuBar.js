import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { NavLink } from 'react-router-dom';
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
              <NavLink activeClassName={styles.active} exact to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} exact to={'/shop/furniture'}>
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} exact to={'/shop/chair'}>
                Chair
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} exact to={'/shop/table'}>
                Table
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} exact to={'/shop/sofa'}>
                Sofa
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} exact to={'/shop/bedroom'}>
                Bedroom
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.active} exact to={'/shop/blog'}>
                Blog
              </NavLink>
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

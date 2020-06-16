import React from 'react';

import styles from './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light visible-xs-block'>
        <button
          onClick={this.onClickHandler}
          className='navbar-toggler visible-xs-block'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </nav>
    );
  }
  onClickHandler() {
    return (
      <div className={styles.menubar}>
        <ul>
          <li>
            <a href='#'>Home</a>
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
    );
  }
}

export default NavBar;

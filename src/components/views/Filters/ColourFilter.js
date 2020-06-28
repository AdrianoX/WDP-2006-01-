import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ColourFilter.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

class ColourFilter extends React.Component {
  state = {
    isActiveRed: false,
    isActiveBlack: false,
    isActiveYellow: false,
    isActiveBlue: false,
    isActivePink: false,
    isActiveGreen: false,
  };

  render() {
    return (
      <div className={styles.colorFilter}>
        <div className={styles.filterName}>FILTER BY COLOR</div>
        <ul className={styles.filterList}>
          <li
            onClick={() => this.setState({ isActiveRed: !this.state.isActiveRed })}
            className={
              this.state.isActiveRed ? styles.activeFilter : styles.unactiveFilter
            }
          >
            <FontAwesomeIcon icon={faSquare} color='#f55c68'></FontAwesomeIcon>
            <span className={styles.filterColour}> Red</span>
          </li>
          <li
            onClick={() => this.setState({ isActiveBlack: !this.state.isActiveBlack })}
            className={
              this.state.isActiveBlack ? styles.activeFilter : styles.unactiveFilter
            }
          >
            <FontAwesomeIcon icon={faSquare} color='#454545'></FontAwesomeIcon>
            <span className={styles.filterColour}> Black</span>
          </li>
          <li
            onClick={() =>
              this.setState({ isActiveYellow: !this.state.isActiveYellow })
            }
            className={
              this.state.isActiveYellow ? styles.activeFilter : styles.unactiveFilter
            }
          >
            <FontAwesomeIcon icon={faSquare} color='#eae502'></FontAwesomeIcon>
            <span className={styles.filterColour}> Yellow</span>
          </li>
          <li
            onClick={() => this.setState({ isActiveBlue: !this.state.isActiveBlue })}
            className={
              this.state.isActiveBlue ? styles.activeFilter : styles.unactiveFilter
            }
          >
            <FontAwesomeIcon icon={faSquare} color='#0092ce'></FontAwesomeIcon>
            <span className={styles.filterColour}> Blue</span>
          </li>
          <li
            onClick={() => this.setState({ isActivePink: !this.state.isActivePink })}
            className={
              this.state.isActivePink ? styles.activeFilter : styles.unactiveFilter
            }
          >
            <FontAwesomeIcon icon={faSquare} color='#f92ce6'></FontAwesomeIcon>
            <span className={styles.filterColour}> Pink</span>
          </li>
          <li
            onClick={() => this.setState({ isActiveGreen: !this.state.isActiveGreen })}
            className={
              this.state.isActiveGreen ? styles.activeFilter : styles.unactiveFilter
            }
          >
            <FontAwesomeIcon icon={faSquare} color='#0dd300'></FontAwesomeIcon>
            <span className={styles.filterColour}> Green</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ColourFilter;

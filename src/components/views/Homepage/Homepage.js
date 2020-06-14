import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import RightSlider from '../../features/RightSlider/RightSlider';
import LeftSlider from '../../features/LeftSlider/LeftSlider';

const Homepage = () => (
  <div className={styles.root}>
    <div className={'container'}>
      <div className='row'>
        <LeftSlider />
      </div>
      <div className='row'>
        <RightSlider />
      </div>
    </div>
    <FeatureBoxes />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;

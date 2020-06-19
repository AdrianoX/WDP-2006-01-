import React from 'react';
import Feedback from '../../features/Feedback/FeedbackContainer';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

import RightSlider from '../../features/RightSlider/RightSlider';
import LeftSlider from '../../features/LeftSlider/LeftSlider';

import SaleProduct from '../../features/SaleProducts/SaleProductContainer';


const Homepage = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <div className={styles.item}>
        <LeftSlider />
      </div>
      <div className={styles.item2}>
        <RightSlider />
      </div>
    </div>
    <FeatureBoxes />
    <SaleProduct />
    <NewFurniture />
    <Feedback />
  </div>
);

export default Homepage;

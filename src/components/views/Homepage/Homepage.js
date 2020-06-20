import React from 'react';
import Feedback from '../../features/Feedback/FeedbackContainer';

import styles from './Homepage.module.scss';
import Gallery from '../../features/Gallery/GalleryContainer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import RightSlider from '../../features/RightSlider/RightSlider';
import LeftSlider from '../../features/LeftSlider/LeftSlider';
import Brands from '../../features/Brands/BrandsContainer';

import SaleProduct from '../../features/SaleProducts/SaleProductContainer';

const Homepage = () => (
  <div className={styles.root}>
    <div className={'flex-column flex-md-row col-md-12 ' + styles.content}>
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
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

export default Homepage;

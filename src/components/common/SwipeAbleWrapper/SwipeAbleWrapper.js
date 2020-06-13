import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SwipeAbleWrapper = ({ leftAction, rightAction, children }) => {

  const params = {
    spaceBetween: 15,
  };

  return (
    <div>
      <Swiper {...params}>{children}</Swiper>
    </div>
  );
};

SwipeAbleWrapper.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default SwipeAbleWrapper;

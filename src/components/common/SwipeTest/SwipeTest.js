import React from 'react';
import PropTypes from 'prop-types';
// import styles from './SwipeTest.module.scss';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
import { Swipe } from 'react-swipe-component';

class SwipeTest extends React.Component {
  render() {
    const { itemsCount, currentAction, currentItem, children } = this.props;

    const params = {
      spaceBetween: 20,
    };

    const onSwipeLeftListener = () => {
      if (currentItem + 1 < itemsCount) {
        currentAction(currentItem + 1);
      }
    };

    const onSwipeRightListener = () => {
      if (currentItem - 1 < itemsCount) {
        currentAction(currentItem - 1);
      }
    };

    return (
      <Swipe
        {...params}
        onSwipedRight={onSwipeRightListener}
        onSwipedLeft={onSwipeLeftListener}
      >
        {children}
      </Swipe>
    );
  }
}

SwipeTest.propTypes = {
  itemsCount: PropTypes.number,
  currentAction: PropTypes.func,
  currentItem: PropTypes.number,
  children: PropTypes.node,
};

export default SwipeTest;

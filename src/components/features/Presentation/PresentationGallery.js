import React from 'react';
import styles from './PresentationGallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faExpandArrowsAlt,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class PresentationGallery extends React.Component {
  render() {
    const { image, name } = this.props;
    const mockProductImages = ['1', '2', '3', '4', '5'];

    return (
      <div className={styles.gallery}>
        <div className={styles.image}>
          <img src={image} alt={name}></img>
          <Button variant='outline' className={styles.expandBtn}>
            <FontAwesomeIcon className={styles.icon} icon={faExpandArrowsAlt}>
              expand
            </FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.thumbnailContainer}>
          <Button variant='outline' className={styles.controlLeft}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          </Button>
          <div className={styles.thumbnailBox}>
            {mockProductImages.slice(0, 4).map((img, id) => (
              <div key={id} className={'col-3 ' + styles.thumbnail}>
                {img}
              </div>
            ))}
          </div>
          <Button variant='outline' className={styles.controlRight}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          </Button>
        </div>
      </div>
    );
  }
}

PresentationGallery.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default PresentationGallery;

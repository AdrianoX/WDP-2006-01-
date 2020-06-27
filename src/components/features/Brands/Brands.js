import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SwipeAbleWrapper from '../../common/SwipeAbleWrapper/SwipeAbleWrapper';

class Brands extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  reder() {
    const { activePage } = this.state;
    const newBrands = [];

    for (let i = 0; i < 3; i++) {
      newBrands.push(
        <div key={'BrandList' + i + '-' + activePage} className={styles.logoBox}>
          {this.props.brands.map(brand => (
            <div key={brand.id} className={styles.logo}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      );
    }

    const changeNewBrands = () => {
      return newBrands;
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <div className={styles.control}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
            </div>

            <SwipeAbleWrapper>{changeNewBrands()}</SwipeAbleWrapper>

            <div className={styles.control}>
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*const Brands = ({ brands }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.control}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          </div>
          <div className={styles.logoBox}>
            {brands.map(brand => (
              <div
                key={brand.id}
                className={'flex-row d-flex flex-wrap col-6 ' + styles.logo}
              >
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
          <div className={styles.control}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};
*/

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
  viewport: PropTypes.string,
};

export default Brands;

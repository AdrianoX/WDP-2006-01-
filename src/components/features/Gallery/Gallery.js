import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GalleryPriceDetails from './GalleryPriceDetails';
import GalleryIcons from './GalleryIcon';
import GalleryRightSide from './GalleryRightSide';

class Gallery extends Component {
  render() {
    const { products } = this.props;

    const image = products.map(p => {
      return p.bgImageUrl.slice(5, -2);
    });

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={styles.heading}>
                    <h3>Furniture Gallery</h3>
                  </div>
                </div>
              </div>
              <div className={styles.menu}>
                <ul className='row'>
                  <li className='col-3'>
                    <a href='#'>FEATURED</a>
                  </li>
                  <li className='col-3'>
                    <a href='#'>TOP SELLER</a>
                  </li>
                  <li className='col-3'>
                    <a href='#'>SALE OFF</a>
                  </li>
                  <li className='col-3'>
                    <a href='#'>TOP RATED</a>
                  </li>
                </ul>
              </div>
              <div className={styles.photoContainer}>
                <div
                  className={styles.photo}
                  style={{ backgroundImage: products[0].bgImageUrl }}
                >
                  <div className={styles.row}>
                    <div className='col-4'>
                      <GalleryIcons />
                    </div>
                    <div className='col-7'>
                      <GalleryPriceDetails
                        name={products[0].name}
                        price={products[0].price}
                        oldPrice={products[0].oldPrice}
                        stars={products[0].stars}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.navigation}>
                  <a href='#'>&#x3c;</a>
                </div>
                <div className={styles.thumbnailBox}>
                  {image.slice(5, 11).map(i => (
                    <div key={i} className={styles.thumbnail}>
                      <img src={i} alt={i} />
                    </div>
                  ))}
                </div>
                <div className={styles.navigation}>
                  <a href='#'>&#x3e;</a>
                </div>
              </div>
            </div>
            {/* Left column end */}
            <div className='col-6'>
              <GalleryRightSide
                bgImageUrl={image[1]}
                name={products[1].name}
                price={products[1].price}
                category={products[1].category}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.number,
      stars: PropTypes.number,
      bgImageUrl: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};

Gallery.defaultProps = {
  products: [],
};
export default Gallery;

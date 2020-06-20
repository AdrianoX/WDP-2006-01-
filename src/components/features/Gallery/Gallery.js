import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GalleryPriceDetails from './GalleryPriceDetails';
import GalleryIcons from './GalleryIcon';
import GalleryRightSide from './GalleryRightSide';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'featured' };
  }
  render() {
    const { products, updateRating, tabs } = this.props;
    const { activeTab } = this.state;

    const image = products.map(p => {
      return p.bgImageUrl;
    });

    // eslint-disable-next-line no-console
    console.log('tabs', tabs);
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
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <a
                        href='#'
                        className={tab.id === activeTab && styles.active}
                        onClick={() => this.TabChange(tab.id)}
                      >
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.photoContainer}>
                <div
                  className={styles.photo}
                  style={{ backgroundImage: `url(${products[0].bgImageUrl})` }}
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
                        rated={products[0].rated}
                        updateRating={updateRating}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.navigation}>
                  <a href='#test'>&#x3c;</a>
                </div>
                <div className={styles.thumbnailBox}>
                  {image.slice(5, 11).map(i => (
                    <div key={i} className={styles.thumbnail}>
                      <img src={i} alt={i} />
                    </div>
                  ))}
                </div>
                <div className={styles.navigation}>
                  <a href='#test'>&#x3e;</a>
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
      rated: PropTypes.bool,
    })
  ),
  updateRating: PropTypes.func,
  tabs: PropTypes.array,
};

Gallery.defaultProps = {
  products: [],
};
export default Gallery;

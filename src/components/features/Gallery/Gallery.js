import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GalleryPriceDetails from './GalleryPriceDetails';
import GalleryIcons from './GalleryIcon';
import GalleryRightSide from './GalleryRightSide';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'featured', visible: false };
  }

  tabChange = (newTab, e) => {
    e.preventDefault();
    this.setState({ activeTab: newTab, visible: true });
  };

  itemInd = () => {
    // eslint-disable-next-line no-unused-vars
    let item;
    const rand = Math.floor(Math.random() * 5);

    if (this.state.activeTab === 'featured') {
      return (item = rand);
    } else if (this.state.activeTab === 'top seller') {
      return (item = rand + 5);
    } else if (this.state.activeTab === 'sale off') {
      return (item = rand + 10);
    } else return (item = rand + 15);
  };

  render() {
    const { products, updateRating, tabs } = this.props;
    const { activeTab, visible } = this.state;

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
                        className={tab.id === activeTab ? styles.active : undefined}
                        onClick={e => this.tabChange(tab.id, e)}
                      >
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={visible ? 'fadeIn' : 'fadeOut'}>
                <div className={styles.photoContainer}>
                  <img
                    className={styles.photo}
                    src={products[this.itemInd()].bgImageUrl}
                    alt={products[this.itemInd()].name}
                  />
                  <GalleryIcons />
                  <GalleryPriceDetails
                    name={products[this.itemInd()].name}
                    price={products[this.itemInd()].price}
                    oldPrice={products[this.itemInd()].oldPrice}
                    stars={products[this.itemInd()].stars}
                    rated={products[this.itemInd()].rated}
                    updateRating={updateRating}
                  />
                </div>
                <div className={styles.slider}>
                  <div className={styles.navigation}>
                    <a href='#'>&#x3c;</a>
                  </div>
                  <div className={styles.thumbnailBox}>
                    {products.slice(5, 11).map(product => (
                      <div key={product.id} className={styles.thumbnail}>
                        <img src={product.bgImageUrl} alt={product.name} />
                      </div>
                    ))}
                  </div>
                  <div className={styles.navigation}>
                    <a href='#'>&#x3e;</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Left column end */}
            <div className='col-6'>
              <GalleryRightSide
                bgImageUrl={products[1].bgImageUrl}
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

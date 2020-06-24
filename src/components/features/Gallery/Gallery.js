import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GalleryPriceDetails from './GalleryPriceDetails';
import GalleryIcons from './GalleryIcon';
import GalleryRightSide from './GalleryRightSide';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'featured',
      activeProduct: {},
      startIndex: 0,
      finishIndex: 6,
      fade: false,
    };
  }

  tabChange = (newTab, e) => {
    e.preventDefault();
    this.setState({ fade: true });

    setTimeout(() => {
      this.setState({ activeTab: newTab });
      this.handleProductChange({});
      this.setState({ fade: false });
    }, 2600);
  };

  handleProductChange(newProduct) {
    this.setState({ activeProduct: newProduct });
  }

  handleNext(event) {
    const { startIndex, finishIndex } = this.state;
   
    const subcategoryProducts = this.props.products.filter(
      item => item.subcategory === this.state.activeTab
    );

    event.preventDefault();

    if (finishIndex < subcategoryProducts.length) {
      this.setState({
        startIndex: startIndex + 1,
        finishIndex: finishIndex + 1,
      });
    }
  }

  handlePrev(event) {
    const { startIndex, finishIndex } = this.state;

    event.preventDefault();
    if (startIndex > 0 && finishIndex > 0) {
      this.setState({
        startIndex: startIndex - 1,
        finishIndex: finishIndex - 1,
      });
    }
  }

  render() {
    const { products, updateRating, galTabs } = this.props;
    const { activeTab, startIndex, finishIndex, activeProduct, fade } = this.state;

    const subcategoryProducts = products.filter(item => item.subcategory === activeTab);
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
                  {galTabs.map(tab => (
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
              <div className={fade ? styles.fadeInAndOut : styles.fadeContainer}>
                {activeProduct.id
                  ? ''
                  : this.handleProductChange(subcategoryProducts[0])}
                {subcategoryProducts
                  .filter(product => product.id === activeProduct.id)
                  .map(item => (
                    <div className={styles.photoContainer} key={item.id}>
                      <img
                        className={styles.photo}
                        src={item.bgImageUrl}
                        alt={item.name}
                      />
                      <GalleryIcons />
                      <GalleryPriceDetails
                        name={item.name}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        stars={item.stars}
                        rated={item.rated}
                        updateRating={updateRating}
                      />
                    </div>
                  ))}
                <div className={styles.slider}>
                  <div className={styles.navigation}>
                    <a href='#' onClick={event => this.handleNext(event)}>
                      &#x3c;
                    </a>
                  </div>
                  <div className={styles.thumbnailBox}>
                    {subcategoryProducts.slice(startIndex, finishIndex).map(item => (
                      <div key={item.id} className={styles.thumbnail}>
                        <img
                          onClick={() => this.handleProductChange(item)}
                          src={item.bgImageUrl}
                          alt={item.name}
                        />
                      </div>
                    ))}
                  </div>
                  <div className={styles.navigation}>
                    <a href='#' onClick={event => this.handlePrev(event)}>
                      &#x3e;
                    </a>
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
  galTabs: PropTypes.array,
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import SwipeAbleWrapper from '../../common/SwipeAbleWrapper/SwipeAbleWrapper';
import ProductBox from '../../common/ProductBox/ProductBox.Container';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  leftAction() {
    const newPage = this.state.activePage;
    this.setState({ activePage: newPage - 1 });
  }

  rightAction() {
    const newPage = this.state.activePage;
    this.setState({ activePage: newPage + 1 });
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  productsOnPage(viewport) {
    let productsOnPage;

    if (viewport === 'desktop') {
      productsOnPage = 8;
    } else if (viewport === 'tablet') {
      productsOnPage = 2;
    } else {
      productsOnPage = 1;
    }

    return productsOnPage;
  }

  render() {
    const { categories, products, viewport } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(
      categoryProducts.length / this.productsOnPage(viewport)
    );

    const newPages = [];
    const dots = [];

    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
      newPages.push(
        <div className={'row' + ' ' + styles.changeForNewPage}>
          {categoryProducts
            .slice(
              activePage * this.productsOnPage(viewport),
              (activePage + 1) * this.productsOnPage(viewport)
            )
            .map(item => (
              <div key={item.id} className='col-lg-3 col-md-6 col-sm-12'>
                <ProductBox {...item} />
              </div>
            ))}
        </div>
      );
    }

    const changeNewPages = () => {
      return newPages;
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-sm-12 ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <SwipeAbleWrapper>{changeNewPages()}</SwipeAbleWrapper>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  viewport: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;

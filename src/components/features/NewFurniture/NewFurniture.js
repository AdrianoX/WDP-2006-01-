import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import SwipeAbleWrapper from '../../common/SwipeAbleWrapper/SwipeAbleWrapper';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import {Spring} from 'react-spring/renderprops';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  productsOnPage(viewport) {
    let productsOnPage;

    if (viewport === 'laptop') {
      productsOnPage = 2;
    } else if (viewport === 'tablet') {
      productsOnPage = 2;
    } else if (viewport === 'mobile') {
      productsOnPage = 1;
    } else {
      productsOnPage = 8;
    }

    return productsOnPage;
  }

  render() {
    const { categories, products, viewport } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const productCount = this.productsOnPage(viewport);
    const pagesCount = Math.ceil(categoryProducts.length / productCount);

    const newPages = [];
    const dots = [];

    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='#test'
            onClick={() => this.handlePageChange(i)}
            className={(i === activePage && styles.active).toString()}
          >
            page {i}
          </a>
        </li>
      );

      newPages.push(
        <div key={i} className={'row ' + styles.changeForNewPage}>
          {
            categoryProducts.slice(
              activePage * productsOnPage,
              (activePage + 1) * productsOnPage
            ).map(
              item => (
                <div key={item.id} className='col-lg-3 col-md-6 col-sm-12'>
                  <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => (
                      <div style={props}>
                        <ProductBox {...item} />
                      </div>
                    )}
                  </Spring>
                </div>
              )
            )
          }
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
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-sm-12 ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        href='#test'
                        className={(
                          item.id === activeCategory && styles.active
                        ).toString()}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.dots}>{/* <ul>{dots}</ul> */}</div>
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

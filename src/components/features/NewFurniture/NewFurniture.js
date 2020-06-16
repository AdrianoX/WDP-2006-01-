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

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

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
          {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
            <div key={item.id} className='col-3'>
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
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;

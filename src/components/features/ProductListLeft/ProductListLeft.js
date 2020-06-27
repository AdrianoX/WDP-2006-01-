import React from 'react';
import styles from './ProductListLeft.module.scss';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';

const ProductList = ({ categories, products, mode }) => {
  const { categoryId } = useParams();
  const category = categories.find(cate => cate.id === categoryId);

  if (!category) {
    return <Redirect to='/notfound' />;
  } else {
    const { id } = category;
    const activeCategory = id;

    const getProductCountFromMode = mode => {
      switch (mode) {
        case 'laptop':
          return 8;
        case 'tablet':
          return 4;
        case 'mobile':
          return 2;
        default:
          return 8;
      }
    };

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const productCount = getProductCountFromMode(mode);

    return (
      <div className={styles.root}>
        <div className={'container' + styles.content}>
          <div className={styles.panelBar}>
            <div className={'row no-gutters align-items-end ' + styles.panelBarElement}>
              <div className={'col-auto ' + styles.heading}>
                <h3>{category.name}</h3>
                <div className={'row ' + styles.swipeElement}>
                  {categoryProducts
                    .slice(mode * productCount, (mode + 1) * productCount)
                    .map(item => (
                      <div key={item.id} className='col-12 col-sm-6 col-xl-3'>
                        <ProductBox {...item} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

ProductList.propTypes = {
  mode: PropTypes.string,
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
    })
  ),
};

export default ProductList;

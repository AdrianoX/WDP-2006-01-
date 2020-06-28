import React from 'react';
import styles from './FilterCategories.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class FilterCategories extends React.Component {
  constructor() {
    super();

    this.state = {
      activeItem: 0,
    };
  }

  handleItemClick(index) {
    this.setState({
      activeItem: index,
    });
  }

  render() {
    const filterCategories = [
      { id: 'Furniture', nr: '3' },
      { id: 'Sofa', nr: '4' },
      { id: 'Chair', nr: '5' },
      { id: 'Table', nr: '5' },
      { id: 'Bedroom', nr: '5' },
      { id: 'Furniture', nr: '5' },
    ];

    return (
      <div>
        <h3 className={styles.title}>Filter By Categories</h3>
        <div className={styles.wrapper}>
          {filterCategories.map((item, index) => (
            <div
              key={item.id}
              className={
                this.state.activeItem === index ? styles.active : styles.noactive
              }
              onClick={this.handleItemClick.bind(this, index)}
            >
              <div className={styles.item}>
                <FontAwesomeIcon className={`${styles.icon}`} icon={faAngleRight} />
                {item.id}
                <div className={styles.item2}>{item.nr}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterCategories;

import React from 'react';
import styles from './FilterSize.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '@material-ui/core/Checkbox';
import { filterSize } from './FilterSize.config';

class FilterSize extends React.Component {
  constructor() {
    super();

    this.state = {
      activeItem: 0,
    };
  }

  handleItemClick(index) {
    this.setState({
      activeItem: index,
      activeCheckbox: index,
    });
  }

  render() {
    return (
      <div>
        <h3 className={styles.title}>Filter By Categories</h3>
        <div className={styles.wrapper}>
          {filterSize.map((item, index) => (
            <div
              key={item.id}
              className={
                this.state.activeItem === index ? styles.active : styles.noactive
              }
              onClick={this.handleItemClick.bind(this, index)}
            >
              <div className={styles.item}>
                <Checkbox />

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

export default FilterSize;

import React from 'react';
import styles from './LeftSlider.module.scss';
import { imageData } from '../../../redux/initialState';

class LeftSlider extends React.Component {
  state = {
    activePage: 0,
  };

  componentDidMount() {
    this.startCount(false);
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  nextPage(pages) {
    let page = this.state.activePage;
    if (page < pages - 1) this.setState({ activePage: page + 1 });
  }

  prevPage() {
    let page = this.state.activePage;
    if (page > 0) this.setState({ activePage: page - 1 });
  }

  startCount(restart) {
    const image = imageData;

    let maxCount = image.length;

    const duration = 3000;

    let count = 0;

    if (restart === true) {
      count = -3;
    } else {
      count = 0;
    }

    this.startCountPlay = setInterval(() => {
      if (count < maxCount - 1) {
        count += 1;
      } else {
        count = 0;
      }

      if (count >= 0) {
        this.handlePageChange(count);
      } else {
        count = 0;
      }
    }, duration);
  }

  restart() {
    clearInterval(this.startCountPlay);
    this.startCount(true);
  }

  render() {
    const image = imageData;
    const pages = image.length;
    let { activePage } = this.state;
    const dots = [];

    for (let i = 0; i < pages; i++) {
      dots.push(
        <li key={i}>
          <a href='#test'
            onClick={() => {
              this.handlePageChange(i);
              this.restart();
            }}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div>
        <div className={'row no-gutters ' + styles.panelBar}>
          <div className={'col-auto'}>
            <h2 className={styles.title}>Hot Deals</h2>
          </div>
          <div className={'col-auto ' + styles.dots}>
            <ul>{dots}</ul>
          </div>
        </div>
        <div>
          {image.slice(activePage * 1, (activePage + 1) * 1).map(item => (
            <div key={item}>
              <div className={styles.component}>
                <img src={item.image} alt={item.title} />
                <div className={styles.wrapper}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LeftSlider;

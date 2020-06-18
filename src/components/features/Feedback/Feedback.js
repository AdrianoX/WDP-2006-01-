import React from 'react';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import SwipeAbleWrapper from '../../common/SwipeAbleWrapper/SwipeAbleWrapper';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    isUnmounted: false,
  };

  handlePageChange = newPage => {
    setTimeout(() => this.setState({ activePage: newPage }), 700);
  };

  getDotsList = () => {
    const { activePage } = this.state;
    const dots = [];

    for (let i = 0; i < 3; i++) {
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
    }
    return dots;
  };

  render() {
    const { ratings } = this.props;
    const { activePage } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-3 ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{this.getDotsList()}</ul>
              </div>
            </div>
          </div>

          <SwipeAbleWrapper>
            <div className='row'>
              <div
                className={'col ' + styles.quote}
                isUnmounted={this.state.isUnmmounted}
              >
                <FontAwesomeIcon icon={faQuoteRight} className={styles.quotes}>
                  {' '}
                  stars
                </FontAwesomeIcon>
                <div className={styles.rating}>{ratings[activePage].rating}</div>
                <div className={styles.person}>
                  <div className={styles.person_image}>
                    <img
                      src={ratings[activePage].image}
                      alt={ratings[activePage].occupation}
                    ></img>
                  </div>
                  <div className={styles.person_name}>
                    <h5>{ratings[activePage].person}</h5>
                    <p>{ratings[activePage].occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwipeAbleWrapper>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      occupation: PropTypes.string,
      rating: PropTypes.string,
      person: PropTypes.string,
    })
  ),
};

export default Feedback;

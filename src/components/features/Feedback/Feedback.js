import React from 'react';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
  state = {
    activePage: 0,
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
            className={i === activePage && styles.active}
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

          <div className='row'>
            <div className={'col ' + styles.quote}>
              <FontAwesomeIcon icon={faQuoteRight} className={styles.quotes}>
                {' '}
                stars
              </FontAwesomeIcon>
              <div className={styles.rating}>{ratings[0].rating}</div>
              <div className={styles.person}>
                <div className={styles.person_image}>
                  <img src={ratings[0].image} alt={ratings[0].occupation}></img>
                </div>
                <div className={styles.person_name}>
                  <h5>{ratings[0].person}</h5>
                  <p>{ratings[0].occupation}</p>
                </div>
              </div>
            </div>
          </div>
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

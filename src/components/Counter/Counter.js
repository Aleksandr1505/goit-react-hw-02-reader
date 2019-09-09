import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ value, totalAmount }) => (
  <p className={styles.counter}>
    {value}/{totalAmount}
  </p>
);

Counter.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;

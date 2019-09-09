import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  disabledOne,
  onHandleForward,
  onHandleBack,
  disabledTwo,
}) => {
  return (
    <section className={styles.controls}>
      <button
        onClick={disabledOne === 'true' ? null : onHandleBack}
        type="button"
        className={
          disabledOne === 'true' ? styles.disabledButton : styles.button
        }
      >
        Назад
      </button>
      <button
        onClick={disabledTwo === 'true' ? null : onHandleForward}
        type="button"
        className={
          disabledTwo === 'true' ? styles.disabledButton : styles.button
        }
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  disabledOne: PropTypes.string.isRequired,
  disabledTwo: PropTypes.string.isRequired,
  onHandleBack: PropTypes.func.isRequired,
  onHandleForward: PropTypes.func.isRequired,
};

export default Controls;

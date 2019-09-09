import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      index: 0,
      items: this.props.items,
    };

    this.HandleBack = this.HandleBack.bind(this);
  }

  // PrevButton = () => {
  //   this.setState(() =>({ one: true });
  // };

  HandleForward = () => {
    this.setState((prevState, props) => ({
      index: prevState.index + props.initialStep,
      value: prevState.value + props.initialStep,
    }));
  };

  HandleBack() {
    this.setState((prevState, props) => ({
      index: prevState.index - props.initialStep,
      value: prevState.value - props.initialStep,
    }));
  }

  render() {
    const { index, items, value } = this.state;

    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />
        <Counter value={value} initialStep={1} totalAmount={items.length} />
        <Controls
          disabledOne={value === 1 ? 'true' : 'false'}
          disabledTwo={value === items.length ? 'true' : 'false'}
          onHandleBack={this.HandleBack}
          onHandleForward={this.HandleForward}
        />
      </div>
    );
  }
}

Reader.defaultProps = {
  initialStep: 1,
};

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  initialStep: PropTypes.number,
};

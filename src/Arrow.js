import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Arrow.scss';

const arrows = {
  top: css.down,
  right: css.left,
  bottom: css.up,
  left: css.right,
};

export default class Arrow extends Component {
  static propTypes = {
    placement: PropTypes.string,
  };
  render() {
    const { placement } = this.props;
    return <div className={arrows[placement] || arrows.top} />;
  }
}

Arrow.defaultProps = {
  placement: 'top',
};

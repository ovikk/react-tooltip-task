import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Popup.scss';

const popups = {
  top: css.top,
  right: css.right,
  bottom: css.bottom,
  left: css.left,
};

export default class Popup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    placement: PropTypes.string,
    open: PropTypes.bool.isRequired,
  };

  render() {
    const { children, placement, open } = this.props;
    return (
      open && <div className={css[placement] || popups.top}>{children}</div>
    );
  }
}

Popup.defaultProps = {
  placement: 'top',
};

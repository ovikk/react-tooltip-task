/**
 * TODO:
 * Code your tooltip component React implementation in this file.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';
import Popup from './Popup';

import css from './Tooltip.scss';

export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  };

  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ open: true });
  }

  handleMouseLeave() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { children, content, placement } = this.props;
    return (
      <div
        className={css.root}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        <Popup open={open} placement={placement}>
          <div className={css.bubble}>
            <Arrow placement={placement} />
            {content}
          </div>
        </Popup>
      </div>
    );
  }
}

Tooltip.defaultProps = {
  placement: 'top',
};

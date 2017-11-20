/**
 * TODO:
 * Create the stories (examples) in this file.
 * See how to use Storybook: https://storybook.js.org
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('top', () => (
    <Tooltip placement="top" content="Tooltip">Example story of something good</Tooltip>
  ))
  .add('left', () => (
    <Tooltip placement="left" content="More ToolTip Text">Example story</Tooltip>
  ))
  .add('bottom', () => (
    <Tooltip placement="bottom" content="More ToolTipTextWith Many Many Words So It Goes like this">Example story</Tooltip>
  ))
  .add('right', () => (
    <Tooltip placement="right" content="Tooltip">Example story</Tooltip>
  ));

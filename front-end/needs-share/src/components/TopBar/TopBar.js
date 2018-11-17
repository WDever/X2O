import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopBar.scss';
import logo from './images/logo2.png';

const cx = classNames.bind(styles);

const TopBar = () => {
  return (
    <header>
      <img src={logo} alt='error' />Needs Share
    </header>
  )
}

export default TopBar;

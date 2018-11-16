import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainPage.scss';

const cx = classNames.bind(styles);

const MainPage = () => {
  return (
    <div className={cx('main-page')}>
      <div className={cx('top-bar')}>
        <div className={cx('logo')}>
          Test
        </div>
      </div>
    </div>
  )
}

export default MainPage;

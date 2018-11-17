import React, { Component }from 'react';
import classNames from 'classnames/bind';
import styles from './MainPage.scss';
import ex1 from './images/ex.png';
import ex2 from './images/ex2.png';
import ex3 from './images/ex3.png';
import ex4 from './images/wx3.png';
import Example from '../Example';

const cx = classNames.bind(styles);

class MainPage extends Component {
  render() {
   return (
      <div className={cx('main-page')}>
        
        <div className={cx('contents')}>
          <div className={cx('board')}>
            <div className={cx('small-box')}>
              게시판
            </div>
            <div className={cx('ex-board')}>
              <a href=''>
                <img src={ex1} alt='error' className={cx('example')} />
              </a>
              <img src={ex2} alt='error' className={cx('example')} />
              <img src={ex3} alt='error' className={cx('example')} />
              <img src={ex4} alt='error' className={cx('example')} />
            </div>
          </div>
       </div>
      </div>
    ) 
  }
  
}

export default MainPage;

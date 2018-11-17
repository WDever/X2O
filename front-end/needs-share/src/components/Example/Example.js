import React from 'react';
import classNames from 'classnames/bind';
import styles from './Example.scss';
import TopBar from '../TopBar';
import add from './images/button.PNG';
import sot from './images/밥솥.png';

const cx = classNames.bind(styles);

const Example = () => {
  return (
    <div className={cx('big')}>
      <TopBar />
      <div className={cx('main-box')}>
        <div className={cx('left-box')}>
          <div className={cx('title')}>
            전기밥솥 가져가실 분 있나요?~~~
          </div>
          <div className={cx('info')}>
            2018-7-16 김미혜
          </div>
          <div className={cx('content')}>
            <div>
              <p>이번에 새로운 밥솥을 사게 되어서,</p>
              <p>사용 했던 밥솥을 기부해보려고 합니다.</p>
              <p>그렇게 거창한 건 아니지만</p>
              <p>함께 나눠 쓴다는 것에</p>
              <p>큰 의의가 있다고 생각이 되네요~</p>
            </div>
            <img src={sot} alt='error' />
          </div>
        </div>
        <div className={cx('right-box')}>
            <div className={cx('comment-box')}>
              <div className={cx('comment')}>
                김희지 &emsp; &emsp; 신청했습니다!
              </div>
              <div className={cx('comment')}>
                양민혁 &emsp; &emsp; 꼭 받고 싶어요!
              </div>
            </div>
            <div className={cx('comment-add')}>
              <img src={add} alt='error' />
            </div>
            <button className={cx('submit')}>
              신청하기
            </button>
          </div>
      </div>
    </div>
  )
}

export default Example;

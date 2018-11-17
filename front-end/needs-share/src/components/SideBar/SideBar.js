import React, { Component } from 'react';
import './SideBar.scss';
import logo from './images/search.png';

class SideBar extends Component {
  state = {
    id: '',
    passwd: '',
    search: ''
  }

  handleChage = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='side-bar'>
        <form className='login-sec'>
          <input
            placeholder="ID"
            value={this.state.id}
            onChage={this.handleChage}
            name="id"
          />
          <input
            placeholder="P/W"
            value={this.state.passwd}
            onChage={this.handleChage}
            name="passwd"
          />
          <div>
            <button>
              회원가입
            </button>
            <button>
              로그인
            </button>
          </div>
        </form>
        <form className='category'>
          <select>
            <option value='10'>10대</option>
            <option value='20'>20대</option>
            <option value='30'>30대</option>
            <option value='40'>40대</option>
            <option value='50'>50대</option>
            <option value='60'>60대</option>
            <option value='70'>70대</option>
            <option value='80'>80대</option>
            <option value='90'>90대</option>
          </select>
          <div className='innner-age'>
            <input type='radio' name='cat-box' value='all' className='inner-cat'/>전체
            <input type='radio' name='cat-box' value='donator' className='inner-cat' />기부
            <input type='radio' name='cat-box' value='taker' className='inner-cat' />신청
          </div>
        </form>
        <form className='search-form'>
          <input
            className='search'
            placeholder='검색'
            value={this.state.search}
            onChage={this.handleChage}
            name='search'
          />
        </form>
      </div>
    );
  }
}

export default SideBar;
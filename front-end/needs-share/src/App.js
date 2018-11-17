import React, { Component } from 'react';
import './App.scss';
import MainPage from './components/Mainpage';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className='page-bar'>
          <MainPage />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default App;

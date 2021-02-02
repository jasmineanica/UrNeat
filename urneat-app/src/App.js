import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import DrinkItem from './components/drinks/DrinkItem';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
        <Navbar title='URNeat'/>
        <DrinkItem/>
        </div>
      );
  }
}
export default App;

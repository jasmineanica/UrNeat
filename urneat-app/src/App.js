import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Drinks from './components/drinks/Drinks';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
        <Navbar title='URNeat'/>
        <Drinks/>
        </div>
      );
  }
}
export default App;

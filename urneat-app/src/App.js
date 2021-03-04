import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Drinks from './components/drinks/Drinks';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    drinks: [],
    loading: false
  };


  async componentDidMount() {
    this.setState({loading: true});

    // this.callBackendAPI()
    //   .then(res => this.setState({ data: res.express }))
    //   .catch(err => console.log(err));
    const res = await this.callBackendAPI();
    // console.log(res.Export.Report.Row);
    this.setState({ drinks: res.Export.Report.Row, loading: false})
  }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/ECP_20.12_A/aspx1/API?APICommand=JasmineAnica_ProductMasterData&APIToken=fc8cc7c6e4c43d759d6ff387a62f5643');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
        <div className='App'>
        <Navbar />

          <div className='container'>
            <Drinks loading={this.state.loading} drinks={this.state.drinks}/>
          </div>

        </div>
      );
  }
}
export default App;

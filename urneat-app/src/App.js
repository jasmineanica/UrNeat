import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Drinks from './components/drinks/Drinks';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    drinks: [],
    loading: false,
  	localdrinks: [
  		{
  			id: '1',
  			BrandName: 'The Balvenie Doublewood',
  			ProductImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf8/h65/12291773431838.png',
        BrandCategory1:'Whiskey',
        BrandCategory2:'Scotch',
        BrandCategory3:'Scotch Whiskey'
  		},
  		{
  			id: '2',
  			BrandName: 'The Green Spot',
  			ProductImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/he8/h26/12244707213342.png',
        BrandCategory1:'Whiskey',
        BrandCategory2:'Irish Whiskey',
        BrandCategory3:''
  		},
  		{
  			id: '3',
  			BrandName: 'Basil Hayden\'s Kentucky Straight Bourbon',
  			ProductImage: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf4/hb9/12140740247582.png',
        BrandCategory1:'Whiskey',
        BrandCategory2:'Bourbon',
        BrandCategory3:''
  		}
  	]
  };


  async componentDidMount() {
    this.setState({loading: true});

    // this.callBackendAPI()
    //   .then(res => this.setState({ data: res.express }))
    //   .catch(err => console.log(err));

    const res = await this.callBackendAPI();

    // console.log(res.Export.Report.Row);
    this.setState({ drinks: res.Export.Report.Row, loading: false})

    // const response = await fetch('/ECP_20.12_A/aspx1/API?APICommand=JasmineAnica_ProductMasterData&APIToken=fc8cc7c6e4c43d759d6ff387a62f5643');
    // const body = await response.json();
    //
    // if (response.status !== 200) {
    //   throw Error(body.message)
    // }
    //
    // this.setState({ drinks: body.Export.Report.Row, loading: false})

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
            <Drinks loading={this.state.loading} drinks={this.state.drinks} localdrinks={this.state.localdrinks}/>
          </div>

        </div>
      );
  }
}
export default App;

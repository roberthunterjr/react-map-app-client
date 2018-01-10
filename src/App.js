import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PLACES} from './dummy.js';

import Results from './components/Results';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      places: []
    };
  }
  getPlaces() {
    return PLACES;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Real Estate Agency Locator </h1>
          <h2> Find agencies nearby your properties </h2>
        </header>
        <div className="container">
          <div className="row">
            <p className="align-center">This area is reserved for the address entry </p>
            <Search />
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="App-intro">
                This area is reserved for the map
              </p>
            </div>
            <div className="col-md-7">
              <p className="App-intro">
                This area is reserved for the search results
              </p>
              <div>
                <Results results={this.state.places}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

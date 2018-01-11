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
      places: [],
      error: {
        code: 0,
        message: ''
      }
    };
  }
  // getPlaces() {
  //   return PLACES;
  // }
  updatePlaces(places) {
    this.setState({
      places: places,
      error: {
        code: 0,
        message: ''
      }
    })
  }
  handleError(code, message) {
    console.log(message);
    this.setState({
      error: {
        code,
        message
      }
    })
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
            <Search
            updatePlacesFn={this.updatePlaces.bind(this)}
            appErrorFn={this.handleError.bind(this)}/>
          </div>
          <div className="row justify-content-center">

            <div className="col-sm-12 bg-faded">
              <div>
                <Results
                results={this.state.places}
                appError={this.state.error}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

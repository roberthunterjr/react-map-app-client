import React, {Component} from 'react';
import ResultTile from './results/ResultTile';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }
  render() {
    if(this.props.results.length) {
      const places = this.props.results;
      return (
        <div className="">
          {ResultTiles(places)}
        </div>
      )
    } else {
      return (
        <div>
          <p className="align-middle"> Results Currently Empty </p>
        </div>
      )
    }
  }

}

const ResultTiles = (results) => {
  return results.map((result) => {
      return (
        <ResultTile
        name={result.name}
        address={result.vicinity}
        />
      );
    });
}

export default Results;

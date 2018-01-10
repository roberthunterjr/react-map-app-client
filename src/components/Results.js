import React, {Component} from 'react';


class Results extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }
  render() {
    if(this.props.results.length) {
      return (
        <div>
          <p> Results Currently Full </p>
        </div>
      )
    } else {
      return (
        <div>
          <p> Results Currently Empty </p>
        </div>
      )
    }
  }

}

export default Results;

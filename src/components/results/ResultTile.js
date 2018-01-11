import React, {Component} from 'react';

class ResultTile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="card card-outline-primary w-50 my-3 mx-2">
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.address}</p>
        </div>
        <div className="footer-muted">
          <p>{Number(this.props.distanceOne * 0.000621371192).toFixed(2)} mi from Address 1</p>
          <p>{Number(this.props.distanceTwo* 0.000621371192).toFixed(2)} mi from Address 2 </p>
        </div>
      </div>
    )
  }
}
const style = {
  card: {
    width: '40rem'
  }
}
export default ResultTile

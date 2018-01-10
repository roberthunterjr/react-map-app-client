import React, {Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      addressOne: '',
      addressTwo: ''
    }
  }

  clickHandle(e){
    e.preventDefault;
  }

  changeHandle(e){
    console.log('Field change',e.target)
    if(e.target.id ==='address-1'){
      this.updateAddress('addressOne',e.target.value)
    } else if(e.target.id ==='address-2') {
      this.updateAddress('addressTwo',e.target.value)
    } else {
      // Do nothing
    }
  }
  updateAddress(property, body){
    this.setState({
      [property]: body
    })
  }

  render() {
    return (
      <div className="row">
        <form className="form-inline">
          {AddressField(1, this.changeHandle.bind(this))}
          {AddressField(2, this.changeHandle.bind(this))}
          <button
            type="button"
            className="btn btn-primary col-md-2"
            onClick={this.clickHandle.bind(this)}>
            Search
          </button>
        </form>
      </div>
    )
  }
}

const ADDRESS_PLACEHOLDER = "Please enter your address";

const AddressField = (id,changeHandler) => {
  return (
    <div className="form-group col-md-5">
      <input
      id={`address-${id}`}
      type="text"
      className="form-control form-control-lg"
      placeholder={ADDRESS_PLACEHOLDER}
      onChange={changeHandler}/>
    </div>
  )
}
export default Search;

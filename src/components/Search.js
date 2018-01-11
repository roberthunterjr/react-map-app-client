import React, {Component} from 'react';
import {PLACES} from '../dummy.js';
import axios from 'axios';
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
    //call getPlaces then updatePlaces
    this.getPlaces()
    .then((places) => {
      this.props.updatePlacesFn(places);
    },(err) => {
      this.props.appErrorFn(err.code, err.message);
    })
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
  encodeAddresses(){
    const bundle = {
      one: this.state.addressOne,
      two: this.state.addressTwo
    };
    return bundle;
  }
  getPlaces(){
    return new Promise((resolve, reject) => {
      if(this.state.addressOne !== '' && this.state.addressTwo !== '') {
        const params = this.encodeAddresses();
        axios.post('http://localhost:3000/api/getPlaces', params)
        .then((response) => {
          if(response.status === 200){
            console.log('this is the get response',response.data);
            resolve(response.data);
          } else if(response.status === 404){
            console.log('No matches were found');
            const err = {
              code: 404,
              message: 'No matches found'
            }
            reject(err);
          }
        })
      } else {
        console.log('Invalid input')
        const err = {
          code: 402,
          message: 'Invalid input'
        }
        reject(err);
      }
      // resolve(PLACES);
    });
  }

  render() {
    return (
      <div className="w-100 m-3">
        <form className="form-inline col">
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
      className="form-control form-control-lg w-100"
      placeholder={ADDRESS_PLACEHOLDER}
      onChange={changeHandler}/>
    </div>
  )
}
export default Search;

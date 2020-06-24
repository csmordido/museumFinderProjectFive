import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.props.onTextInputChange(event.target.value);
  } 

  handleSubmit = (event) => {
    this.props.onFormSubmit(event);
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='wrapper'> 
        <label className='visuallyHidden' htmlFor='city'>Enter a city</label>
        <input id='city' value={this.props.value} type='text' placeholder='Enter City' onChange={this.handleChange} />

        <label className='visuallyHidden' htmlFor='submit'>Search</label>
        <input id='submit' type='submit' value='Search' />

        <p>Enter a city to search for museums.</p>
      </form>
    )
  }
}

export default Form;
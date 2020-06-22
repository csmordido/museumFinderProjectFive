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
      <form onSubmit={this.handleSubmit}> 
        <input value={this.props.value} type="text" placeholder="Enter City" onChange={this.handleChange} />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default Form;
import React, {Component} from 'react';

class DisplayErrorMessage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // on click of the "Close window" button
  handleClick = () => {
    // hide the error message
    document.querySelector('.errorMessage')
    .style.display = 'none';
    // update hasError state to false
    this.props.updateErrorState(false);
  }

  render () {
    return (
      <div className='errorMessage'>
        <p>Something went wrong.</p>
        <p>Please try again.</p>
        <button type='button' onClick={this.handleClick}>Close window</button>
      </div>
    );
  }
}

export default DisplayErrorMessage;
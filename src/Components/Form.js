import React from 'react';

const Form = (props) =>  {
    return (
      <form onSubmit={props.handleSubmit} className='wrapper'> 
        <label className='visuallyHidden' htmlFor='city'>Enter a city</label>
        <input id='city' value={props.value} type='text' placeholder='Enter City' onChange={props.handleChange} />

        <label className='visuallyHidden' htmlFor='submit'>Search</label>
        <input id='submit' type='submit' value='Search' />

        <p>Enter a city to search for museums.</p>
      </form>
    )
  }

export default Form;
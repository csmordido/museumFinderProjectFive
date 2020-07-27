import React, { useState } from 'react';

const Form = (props) =>  {
  const [userInput, handleChange] = useState("");

  return (
    <form onSubmit={props.handleSubmit} className='wrapper'> 
      <label className='visuallyHidden' htmlFor='city'>Enter a city</label>
      <input id='city' value={userInput} type='text' placeholder='Enter City' onChange={(event) => handleChange(event.target.value)} />

      <label className='visuallyHidden' htmlFor='submit'>Search</label>
      <input id='submit' type='submit' value='Search' />

      <p>Enter a city to search for museums.</p>
    </form>
  )
}

export default Form;
import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const Saved = () => {

  const [museums, setMuseums] = useState([]);

  // hook to pull database data on page load
  useEffect(() => {

    const dbRef = firebase.database().ref();

    // event listener attached to the firebase database to listen for any value change
    dbRef.on('value', response => {

      // create an empty array to store database data into
      const newMuseums = [];

      // store object data from firebase in a variable
      const data = response.val();

      // loop through the returned database object
      for (let key in data) {
        
        // and push each item into the newMuseums array
        newMuseums.push(data[key]);
        
      };

      // store the newMuseums array to the museums state
      setMuseums(newMuseums);

    });

  }, []);

  // make a copy of the museums state to map over it
  const museumsCopy = [...museums];

  return (
    <section className='saved'>

      <h2>Saved Museums</h2>

      <ul className='wrapper'>

        {
          museumsCopy.map( object => {
              return (
                <li key={object.xid}>

                  <button type='button'>
                    <h3>{object.name}</h3> 
                    <p>{object.address.city}, {object.address.country_code.toUpperCase()} </p>
                    <img src={object.img} alt={object.name}/>
                  </button>
                  
                </li>
              )
          })
        }

      </ul>

    </section>
  )

}

export default Saved;
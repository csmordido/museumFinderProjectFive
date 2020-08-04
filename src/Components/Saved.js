import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import SavedModal from './SavedModal';

const Saved = () => {

  const [museums, setMuseums] = useState([]);

  const [museumDetails, setMuseumDetails] = useState([]);

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

  const handleClick = (event) => {

    const xid = event.currentTarget.value;

    const museumDetails = museumsCopy.filter( object => object.xid === xid );

    setMuseumDetails(museumDetails);

  };

  const museumDetailsCopy = [...museumDetails];

  return (
    <section className='saved'>

      <h2>Saved Museums</h2>

      <ul className='wrapper'>

        {
          museumsCopy.map( object => {
              return (
                <li key={object.xid}>

                  <button type='button' value={object.xid} onClick={handleClick}>
                    <h3>{object.name}</h3> 
                    <p>{object.address.city}, {object.address.country_code.toUpperCase()} </p>
                    <img src={object.img} alt={object.name}/>
                  </button>
                  
                </li>
              )
          })
        }

      </ul>

      <SavedModal museumDetails={museumDetailsCopy} setMuseumDetails={setMuseumDetails} />

    </section>
  )

}

export default Saved;
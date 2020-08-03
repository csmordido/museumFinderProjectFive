import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const Itinerary = () => {

  const [museums, setMuseums] = useState([]);

  useEffect(() => {

    const dbRef = firebase.database().ref();

    dbRef.on('value', response => {

      const newMuseums = [];

      const data = response.val();

      for (let key in data) {
        data[key].map( object => {
          newMuseums.push(object);
        })
      }

      setMuseums(newMuseums);

    });

  }, []);

  const museumsCopy = [...museums];

  return (
    <section className='itinerary wrapper'>

      <h2>Museums Itinerary</h2>

      <ul>
        
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

export default Itinerary;
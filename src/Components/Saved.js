import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const Saved = () => {

  const [museums, setMuseums] = useState([]);

  useEffect(() => {

    const dbRef = firebase.database().ref();

    dbRef.on('value', response => {

      const newMuseums = [];

      const data = response.val();

      for (let key in data) {
        
        newMuseums.push(data[key]);
        
      }

      setMuseums(newMuseums);

    });

  }, []);

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
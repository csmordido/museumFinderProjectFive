import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import SavedModal from './SavedModal';

const Saved = () => {

  // State storing the museums object from the database. Set in the useEffect hook.
  const [museums, setMuseums] = useState([]);

  // State storing the details of the clicked museum card to render the modal.
  const [museumDetails, setMuseumDetails] = useState([]);

  // hook to pull database data on page load
  useEffect(() => {

    let isMounted = true;

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
        newMuseums.push({key: key, data: data[key]});
        
      };

      // store the newMuseums array to the museums state
      if (isMounted) setMuseums(newMuseums);

    });

    return () => {isMounted = false}

  }, []);

  // make a copy of the museums state to map over it
  const museumsCopy = [...museums];

  // sets the museumDetails state with the details of the clicked museum card and renders the modal
  const openModal = (xid) => {

    // filters the museumsCopy array for the details of the clicked museum using the xid of the clicked museum card
    const museumDetails = museumsCopy.filter( object => object.data.xid === xid );

    // set the museumDetails state to the details object of the clicked museum card
    setMuseumDetails(museumDetails);

  };

  // function to delete museum in the firebase database
  const deleteMuseum = (firebaseKey) => {

    // store the path to the database in the dbRef variable
    const dbRef = firebase.database().ref();

    // use the unique key from the database to delete the clicked museum
    dbRef.child(firebaseKey).remove();

  }

  // copy of the museumDetails array
  const museumDetailsCopy = [...museumDetails];

  return (
    <section className='saved' id='savedSection'>

      <h2>Saved Museums</h2>

      <ul className='wrapper'>

        {
          museumsCopy.map( object => {
              return (
                <li key={object.key}>

                  <button className='delete' onClick={() => deleteMuseum(object.key)} type='button'>X</button>

                  <button type='button' onClick={() => openModal(object.data.xid)}>
                    <h3>{object.data.name}</h3> 
                    <p>{object.data.address.city}, {object.data.address.country_code.toUpperCase()} </p>
                    <img src={object.data.img} alt={object.data.name}/>
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
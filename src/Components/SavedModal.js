import React from 'react';

const SavedModal = (props) => {

  // function to close the modal
  const closeModal = () => {

    // set the museumDetails state in the Saved component to an empty array
    props.setMuseumDetails([]);

  }

  return (

    <>

      {
        props.museumDetails.map(item => {

          return (

            <div className='wrapper museumContainer savedMuseumDetails' key={item.key}>

              <button onClick={closeModal} type='button'>X</button>

              <div className='museumImg'>
                <img src={item.data.img} alt={item.data.name}/>
              </div>

              <div className='museumInfo'>

                <h3>{item.data.name}</h3>
                <address>{item.data.address.house_number} {item.data.address.road}, {item.data.address.city}, {item.data.address.state}, {item.data.address.postcode} {item.data.address.country}</address>
                <a href={item.data.siteUrl}>Visit {item.data.name}'s website</a>
                <p>{item.data.info}
                </p>

              </div>

            </div>
            
          )

        })
      }

    </>
  )

};

export default SavedModal;
import React from 'react';

const SavedModal = (props) => {

  const handleClick = () => {

    props.setMuseumDetails([]);

  }

  return (

    <>

      {
        props.museumDetails.map(item => {

          return (

            <div className='wrapper museumContainer savedMuseumDetails' key={item.xid}>

              <button onClick={handleClick} type='button'>X</button>

              <div className='museumImg'>
                <img src={item.img} alt={item.name}/>
              </div>

              <div className='museumInfo'>

                <h2>{item.name}</h2>
                <address>{item.address.house_number} {item.address.road}, {item.address.city}, {item.address.state}, {item.address.postcode} {item.address.country}</address>
                <a href={item.siteUrl}>Visit {item.name}'s website</a>
                <p>{item.info}
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import scrollToElement from './scrollToElement';

const MuseumDetails = (props) => {

  const [museumDetails, setMuseumDetails] = useState([]);

  // async function called in the useEffect hook
  const getMuseumDetails = async () => {

    // make the API request for the details of the picked museum
    try {
      const response = await axios({
        url: `https://api.opentripmap.com/0.1/en/places/xid/${props.xid}`,
        method: 'GET',
        responseType: 'JSON',
        params: {
          apikey: process.env.REACT_APP_OTM_KEY,
        }
      });

      // create an empty array to push the API data into
      const museumDetails = [];

      // organize the API data into an object
      const newMuseumDetails = {
        address: response.data.address,
        img: response.data.preview.source,
        name: response.data.name,
        siteUrl: response.data.url,
        info: response.data.wikipedia_extracts.text,
        xid: response.data.xid
      };
      
      // push the newMuseumDetails object into the museumDetails array 
      museumDetails.push(newMuseumDetails);

      // set the museumDetails state to the museumDetails array
      setMuseumDetails(museumDetails);

      // scroll to the #museumDetailsContainer section
      scrollToElement('museumDetailsContainer');
       
    } catch(err) {
      // console.log(err);
    } 

  }

  // on click of the 'Go back to list' button
  const handleClick = () => {

    // scroll back to the #cityInfoContainer div
    scrollToElement('cityInfoContainer');
    
    // set the setIsHidden state to true after a second to hide the museum details
    setTimeout(() => {
      props.setIsHidden(true);
    }, 1000);
  }

  // hook to make the API request everytime the xid props updates
  useEffect(() => {

    getMuseumDetails();

  }, [props.xid]);

  // make a copy of the museumDetails state array to map over it
  const museumDetailsCopy = [...museumDetails];

  return (
    <section className='museumDetails' id='museumDetailsContainer'>

      {
        museumDetailsCopy.map(item => {

          return (

            <div className='wrapper museumContainer' key={item.xid}>

              <div className='museumImg'>
                <img src={item.img} alt={item.name}/>
              </div>

              <div className='museumInfo'>

                <h2>{item.name}</h2>
                <address>{item.address.house_number} {item.address.road}, {item.address.city}, {item.address.state}, {item.address.postcode} {item.address.country}</address>
                <a href={item.siteUrl}>Visit {item.name}'s website</a>
                <p>{item.info}
                </p>

                <button onClick={handleClick} type='button'>Go back to list</button>

              </div>

            </div>
            
          )

        })
      }

    </section>
  )
}

export default MuseumDetails;
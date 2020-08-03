import React, { useState, useEffect } from 'react';
import axios from 'axios';
import scrollToElement from './scrollToElement';

// function to display the .museumDetails section on the page
const MuseumDetails = (props) => {

  const [museumDetails, setMuseumDetails] = useState([]);

  // on click of the list's button
  const getMuseumDetails = async () => {

    try {
      const response = await axios({
        url: `https://api.opentripmap.com/0.1/en/places/xid/${props.xid}`,
        method: 'GET',
        responseType: 'JSON',
        params: {
          apikey: process.env.REACT_APP_OTM_KEY,
        }
      });

      const museumDetails = [];

      const newMuseumDetails = {
        address: response.data.address,
        img: response.data.preview.source,
        name: response.data.name,
        siteUrl: response.data.url,
        info: response.data.wikipedia_extracts.text,
        xid: response.data.xid
      };
      
      museumDetails.push(newMuseumDetails);

      setMuseumDetails(museumDetails);

      scrollToElement('museumDetailsContainer');
       
    } catch(err) {
      // console.log(err);
    } 
  }

  // on click of the 'Go back to list' button
  const handleClick = () => {
    // scroll back to the museums list
    scrollToElement('cityInfoContainer');
    
    setTimeout(() => {
      props.setIsHidden(true);
    }, 1000);
  }

  useEffect(() => {
    getMuseumDetails();
  }, [props.xid]);

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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import scrollToElement from './scrollToElement';

// function to display the .museumDetails section on the page
const MuseumDetails = (props) => {

  const [museumDetails, updateMuseumDetails] = useState({});

  // on click of the list's button
  const getMuseumDetails = async () => {

    const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';

    try {
      const response = await axios({
        url: `https://api.opentripmap.com/0.1/en/places/xid/${props.xid}`,
        method: 'GET',
        responseType: 'JSON',
        params: {
          apikey: key,
        }
      });

      const museumDetails = {
        address: response.data.address,
        img: response.data.preview.source,
        name: response.data.name,
        siteUrl: response.data.url,
        info: response.data.wikipedia_extracts.text,
      }

      updateMuseumDetails(museumDetails);
            
    } catch(err) {
      console.log(err);
    } 
  }

  useEffect(() => {
    getMuseumDetails();
  }, [props.xid]);


  const {img, name, siteUrl, info, address} = museumDetails;
  console.log(address);

  return (
    <section className='museumDetails' id='detailsContainer'>
      <div className='wrapper museumContainer'>
        <div className='museumImg'>
          <img src={img} alt={name}/>
        </div>
        <div className='museumInfo'>
          <h2>{name}</h2>
          {/* <address>{address.house_number} {address.road}, {address.city}, {address.state}, {address.postcode} {address.country}</address> */}
          <a href={siteUrl}>Visit {name}'s website</a>
          <p>{info}
          </p>
          <button onClick={handleClick} type='button'>Go back to list</button>
        </div>
      </div>
    </section>
  )
}

// on click of the 'Go back to list' button
const handleClick = () => {
  // scroll back to the museums list
  scrollToElement('listContainer');
  // hide the museum details after a second
  setTimeout(() => {
    document.getElementById('detailsContainer').style.display = 'none';
  }, 1000);
}

export default MuseumDetails;
import React from 'react';
// import scrollToElement from './scrollToElement';
// import axios from 'axios';
import CityHeader from './CityHeader';
import CityMuseums from './CityMuseums';

// on click of the list's button
// const handleClick = e => {
  // grab the value (xid props) of the clicked button
  // const xid = e.target.value;
  // const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';
  // use the xid in the API endpoint to get details of the clicked museum
//   axios({
//     url: `https://api.opentripmap.com/0.1/en/places/xid/${xid}`,
//     method: 'GET',
//     responseType: 'JSON',
//     params: {
//       apikey: key,
//     }
//   }).then(response => {
//     const newMuseumDetails = [];
//     // push the API data to the newMuseumDetails array
//     newMuseumDetails.push(response.data);
//     // update the museumDetails state in the App.js with newMuseumsDetails array
//     this.props.onDataUpdate(newMuseumDetails);
//     // scroll to #detailsContainer after getting a response from the API
//     scrollToElement('detailsContainer');
//   })
// }

const CityData = (props) => {
    return (
      <>
        <CityHeader cityData={props.cityData} />
        <CityMuseums cityData={props.cityData} />
      </>
    )
  }

export default CityData;
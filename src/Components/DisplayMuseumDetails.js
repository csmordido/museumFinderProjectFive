import React from 'react';
import scrollToElement from './ScrollToElement';

const DisplayMuseumDetails = ({imgDetail, nameDetail, addressDetail, urlDetail, infoDetail}) => {

  const {house_number, road, city, state, postcode, country} = addressDetail;

  return (
    <section className="museumDetails" id="detailsContainer">
      <div className="museumImg">
        <img src={imgDetail} alt={nameDetail}/>
      </div>
      <div className="museumInfo">
        <h2>{nameDetail}</h2>
        <address>{house_number} {road}, {city}, {state}, {postcode} {country}</address>
        <a href={urlDetail}>Visit {nameDetail}'s website</a>
        <p>{infoDetail}
        </p>
        <button onClick={handleClick} type="button">Go back to list</button>
      </div>
    </section>
  )
}

const handleClick = () => {
  scrollToElement('listContainer');
  setTimeout(() => {
    document.getElementById('detailsContainer').style.display = 'none';
  }, 400);
}

export default DisplayMuseumDetails;
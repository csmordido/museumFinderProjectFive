import React from 'react';

const DisplayMuseumDetails = ({imgDetail, nameDetail, addressDetail, urlDetail, infoDetail}) => {

  const {house_number, road, city, state, postcode, country} = addressDetail;

  return (
    <section className="museumDetails">
      <div className="museumImg">
        <img src={imgDetail} alt={nameDetail}/>
      </div>
      <div className="museumInfo">
        <h2>{nameDetail}</h2>
        <address>{house_number} {road}, {city}, {state}, {postcode} {country}</address>
        <a href={urlDetail}>Visit {nameDetail}'s website</a>
        <p>{infoDetail}
        </p>
        <button type="button">Go back to list</button>
      </div>
    </section>
  )
}

export default DisplayMuseumDetails;
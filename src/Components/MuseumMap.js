import React, { useEffect, useRef } from 'react';

const MuseumMap = (props) => {
  const googleMapRef = useRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  const createGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: props.lat,
        lng: props.lon,
      },
      disableDefaultUI: true,
    });
  }

  const createMarker = () => {
    return new window.google.maps.Marker({
      position: {lat: props.lat, lng: props.lon},
      map: googleMap.current
    });
  }

  useEffect(() => {
    const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            googleMap.current = createGoogleMap();
            marker.current = createMarker();
        });

        return () => {
          googleMapScript.removeEventListener('load', () => {
            googleMap.current = createGoogleMap();
            marker.current = createMarker();
          });
          googleMapScript.remove();
        }
  }, []);

  return (
    <div ref={googleMapRef} style={{height: '300px', width: '100%', flexBasis: '100%', marginBottom: '30px'}}>

    </div>
  );
}

export default MuseumMap;
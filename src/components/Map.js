import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map({ coords }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const defaultMapOptions = {
    disableDefaultUI: true,
  };

  return (
    <GoogleMap
      zoom={20}
      center={{ lat: coords.lat, lng: coords.lng }}
      options={defaultMapOptions}
      mapContainerClassName="googlemap"
      mapTypeId="satellite"
    ></GoogleMap>
  );
}

export default Map;

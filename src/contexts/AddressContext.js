import React, { useContext, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export const AddressContext = React.createContext();

export function useAddress() {
  return useContext(AddressContext);
}

export function AddressProvider({ children }) {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  const value = {
    address,
    coords,
    setAddress,
    setCoords,
  };

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
}

export default AddressContext;

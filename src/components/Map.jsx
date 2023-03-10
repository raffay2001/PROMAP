import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";
import data from "../data";
import { useNavigate } from "react-router-dom";
const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 24.8607,
  lng: 67.0011,
};

function Map({ inputText }) {
  const [marker, setMarker] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (inputText && data) {
      const searchValue = inputText.toLowerCase();
      const filteredArray = data.filter((obj) => {
        const storeName = obj.storeName.toLowerCase();
        const address = obj.address.toLowerCase();
        const products = obj.products;
        return (
          storeName.includes(searchValue) ||
          address.includes(searchValue) ||
          products.includes(searchValue)
        );
      });
      setFilterData(filteredArray);
    }
  }, [inputText, data]);
  const toDisplay = filterData.length ? filterData : data;
  console.log("to display", toDisplay);
  return (
    <LoadScript googleMapsApiKey="AIzaSyCI1_gTAMiklKuDVArJ8AxfK2FUOA1S9jc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {toDisplay?.map((item, index) => (
          <MarkerF
            key={index}
            position={item.location}
            onClick={() => navigate("/company/" + item.linkName)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
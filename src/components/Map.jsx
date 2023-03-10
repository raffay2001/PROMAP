// import React from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
// import { useLoadScript } from "@react-google-maps/api";

// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// export default function GoogleMaps() {
//   //   const { isLoaded, loadError } = useLoadScript({
//   //     // Uncomment the line below and add your API key
//   //     googleMapsApiKey: "AIzaSyCI1_gTAMiklKuDVArJ8AxfK2FUOA1S9jc",
//   //   });

//   //   if (loadError) return "Error loading Maps";
//   //   if (!isLoaded) return "Loading Maps";

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCI1_gTAMiklKuDVArJ8AxfK2FUOA1S9jc">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={11}
//         center={{ lat: 30.556575309919832, lng: 74.23059946728019 }}
//       >
//         {/* <Marker
//         position={{ lat: 30.556575309919832, lng: 74.23059946728019 }}
//         animation={window.google.maps.Animation.BOUNCE}
//         shape={"MarkerShapeCircle"}
//         icon={{
//           url: `/assets/${localStorage.getItem("profilePicture")}`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//       />

//       <Marker position={{ lat: 30.666566535047345, lng: 72.00579361319225 }} />

//       <Marker
//         icon={{
//           url: `/assets/dr1.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 30.1873340100343, lng: 71.0592030053592 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.2.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 29.241626381974154, lng: 73.85536108811847 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.3.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 29.196936421354902, lng: 74.93306266288806 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.4.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 32.88756197727074, lng: 71.63754176630823 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.5.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 28.72004824730222, lng: 73.73819583572147 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.6.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 32.71402513650517, lng: 73.32972403153042 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.7.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 29.68928524220279, lng: 70.58851046214524 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.8.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 31.950342057520675, lng: 75.07688404081894 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.9.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 28.756575309919832, lng: 74.23059946728019 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.10.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 29.632376398839273, lng: 72.76808370290219 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.11.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 31.507404663180047, lng: 70.66124574368001 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.12.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 33.27288553509127, lng: 73.12653274035641 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.13.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 31.261932933711908, lng: 70.59388555755895 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.14.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 29.26651820468962, lng: 74.09306633730934 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.15.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 33.064895990578485, lng: 70.49740279029244 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.16.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 32.838841916666006, lng: 74.95539329953021 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.17.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 31.39368579966949, lng: 70.47458409359356 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.18.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 31.181416638785407, lng: 73.25346299487865 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.19.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 30.550581214306003, lng: 73.13629938077541 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.20.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 28.728471924347474, lng: 70.85357308100306 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.21.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 30.918638676873698, lng: 71.15771938142186 }}
//       />
//       <Marker
//         icon={{
//           url: `/assets/dr.22.jpg`,
//           scaledSize: new window.google.maps.Size(50, 50),
//         }}
//         position={{ lat: 28.394302346547395, lng: 73.28668136298464 }}
//       /> */}
//         <Marker
//           position={{ lat: 28.394302346547395, lng: 73.28668136298464 }}
//         />
//       </GoogleMap>
//     </LoadScript>
//   );
// }

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
      const searchValue = inputText.toLowerCase(); // convert search value to lowercase for case-insensitive search
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
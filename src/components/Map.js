
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { hostels } from "../data/data";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import Star from "./star";

const Map = () => {
  const icon = new Icon({
    iconUrl: "/markerIcon.svg",
    iconSize: [30, 30],
  });

  // const initialMarker =  [55.86639, -4.24919]
  const initialMarker = {}
  const [activeHostel, setActiveHostel] = useState(initialMarker);
  const position = [57.5536434,-4.3297715];

  //   const markerClicked = (position) => {   
  //     setActiveHostel(position)
  // }

  const markerClicked = (properties) => {
    setActiveHostel(properties)
  }

  return (
    <>
      <MapContainer
        center={position}
        zoom={9}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hostels.map((hostel) => (
          <Marker
            key={hostel.id}
            position={[
              hostel.location.lat,
              hostel.location.long,
            ]}
            icon={icon}
            // eventHandlers={{ click: () => markerClicked(cafe.geometry.coordinates) }}  
            eventHandlers={{ click: () => markerClicked(hostel) }}

          >
            <Popup>
              <div className="popup" role="alert">
              <h2 className="hostel-name">{hostel.name}</h2>  <hr />
              <b>Address:</b> {hostel.address} <br />
              <b>Post code:</b> {hostel.postcode} <br />
              <b>Phone:</b> {hostel.phone} <br />
              <b>Description:</b> {hostel.description} <br />
                {hostel.ratings.length > 0 && (
                  <span>
                    <b>Average rating:</b> {(hostel.ratings.reduce((acc, cur) => acc + cur, 0) / hostel.ratings.length).toFixed(1)}
                  </span>
                )} <br />
                <b>Total ratings:</b> {hostel.ratings.length} <br />
                <b>Total ratings distribution: </b> <Star />
                {/* {hostel.ratings.length}  */}
                <br />
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
      {/* <div className="info">The cafe you have currently selected is located at latitude:{activeCafe[0]} longitude:{activeCafe[1]}.</div>  */}
      <div className="info">The hostel you have currently selected is {activeHostel.name} {activeHostel.desc}.</div>
    </>
  );
};
export default Map;
























// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
// import { hostels } from "../data/data";
// import { Icon } from "leaflet";
// import hostelData from "../data/locations.json";


// const Map = () => {
//   const icon = new Icon({
//     iconUrl: "/markerIcon.svg",
//     iconSize: [30, 30],
//   });

//   // const initialMarker =  [55.86639, -4.24919]
//   const initialMarker = {}
//   const [activeHostel, setActiveHostel] = useState(initialMarker);
//   const position = [55.86639, -4.24919];

//   //   const markerClicked = (position) => {   
//   //     setActiveHostel(position)
//   // }

//   const markerClicked = (properties) => {
//     setActiveHostel(properties)
//   }

// return (
//     <>
//       <MapContainer
//         center={position}
//         zoom={9}
//         scrollWheelZoom={true}
//         className="map"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {hostelData.features.map((hostel) => (
//           <Marker
//             key={hostel.properties.hostel_id}
//             position={[
//               hostel.geometry.coordinates[0],
//               hostel.geometry.coordinates[1],
//             ]}
//             icon={icon}
//             // eventHandlers={{ click: () => markerClicked(cafe.geometry.coordinates) }}  
//             eventHandlers={{ click: () => markerClicked(hostel.properties) }}  

//           >
//             <Popup>
//               <div className="popup" role="alert">
//               Here is the location of the {hostel.properties.name} hostel. <br />
//                 {hostel.properties.desc} <br />
//               </div>
//             </Popup>
//           </Marker>
//         ))}

//       </MapContainer>
//        {/* <div className="info">The cafe you have currently selected is located at latitude:{activeCafe[0]} longitude:{activeCafe[1]}.</div>  */}
//        <div className="info">The hostel you have currently selected is {activeHostel.name} {activeHostel.desc}.</div>
//     </>
//   );
// };
// export default Map;


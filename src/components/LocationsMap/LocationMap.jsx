import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ children }) => children;

const LocationMap = ({ userInfo }) => {


  return (
    <div style={{ height: " 50vh", width: "50% " }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
        defaultZoom={5}
      >
        {userInfo?.map((user) => (
           <Marker key={user?.id} lat={user?.lat} lng={user?.lng}>
            <div>
              <img
                src="/location-svgrepo-com.svg"
                alt={user?.id}
                style={{ width: "15px " }}
              />
              {user?.id} {user?.name}
            </div>
          </Marker>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default LocationMap;
